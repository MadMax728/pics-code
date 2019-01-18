import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLanguage } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

const languageData = [
  {
    id: Translations.languages.english,
    value: Translations.languages.english
  },
  {
    id: Translations.languages.german,
    value: Translations.languages.german
  }
];

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageList: []
    };
  }

  componentWillMount = () => {
    this.props.getLanguage(languageData);
  };

  render() {
    const { value, className } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleLanguage}
        onBlur={this.handleLanguage}
        options={languageData}
      >
        <option value={Translations.base_footer.language}>
          {Translations.base_footer.language}
        </option>
        {languageData.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    if (this.props.languageList && this.props.languageList.languages) {
      this.setState({
        languageList: this.props.languageList.languages
      });
    }
  };

  componentWillUnmount = () => {
    this.setState({ languageList: [] });
  };

  handleLanguage = event => {
    this.props.handleSelect("language", event.target.value);
  };

}

const mapStateToProps = state => ({
  languageList: state.selectData
});

const mapDispatchToProps = {
  getLanguage
};

const propTypes = {
  value: PropTypes.any,
  languageList: PropTypes.any,
  className: PropTypes.string,
  getLanguage: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectLanguage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectLanguage);
