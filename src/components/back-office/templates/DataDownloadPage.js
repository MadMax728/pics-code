import React, { Component } from "react";
import { Translations } from "../../../lib/translations";
import * as routes from "../../../lib/constants/routes";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DataDownloadPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: ""
      }
    };
  }

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">
            {Translations.admin.Data_download}
          </div>
          <div className="user_download_wrapr">
            <div className="title_with_search_dropdown_button">
              <input
                type="search"
                name="username"
                id="username"
                placeholder={Translations.admin.UserName}
                className="flex2"
                onChange={this.handleChangeField}
              />
              <button className="wid30per" onClick={this.handleSubmit}>
                {Translations.admin.Download}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
  };

}

const mapStateToProps = state => ({
  searchData: state.searchData
});

const mapDispatchToProps = {

};

DataDownloadPage.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataDownloadPage);