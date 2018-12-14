import React, { Component } from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import {
  getOfferTag,
  addOfferTag
} from "../../../actions";
import { connect } from "react-redux";

class OfferTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionsOfferTagList: []
    }
  }

  componentWillUnmount = () => {
    this.setState({suggestionsOfferTagList: []})
  }

  componentDidMount = () => {
    this.props.getOfferTag().then(() => {
      if(this.props.offerTags) {
        this.setState({
          suggestionsOfferTagList: this.props.offerTags
        });
      }
    });
  }
  
  handleOfferTagDelete = id => {
    this.props.handleOfferTagDelete(id);
  };

  handleOfferTagChange = tag => {
    const { suggestionsOfferTagList } = this.state;
    const indexOf = suggestionsOfferTagList.findIndex(f => {
      return f.id === tag.id;
    });

    if (indexOf === -1) {
      const tagName = {
        offerTagName: tag.text
      }
      this.props.addOfferTag(tagName).then(()=> {
        this.props.handleOfferTagChange(this.props.tags.addedOfferTags.id, this.props.tags.addedOfferTags)
      })
    } else {
      this.props.handleOfferTagChange(tag.id, tag);
    }
  };

  render() {
    const { suggestionsOfferTagList } = this.state;
    const { value } = this.props;
    return (
        <Tags
          value={value}
          suggestion={suggestionsOfferTagList}
          handleAddition={this.handleOfferTagChange}
          handleDelete={this.handleOfferTagDelete}
        />
    );
  }
}

const mapStateToProps = state => ({
  offerTags: state.tags.offerTags,
  tags: state.tags,
});

const mapDispatchToProps = {
  getOfferTag,
  addOfferTag,
};


const propTypes = {
  value: PropTypes.any,
  handleOfferTagChange: PropTypes.func.isRequired,
  handleOfferTagDelete: PropTypes.func.isRequired,
  getOfferTag: PropTypes.func.isRequired,
  addOfferTag: PropTypes.func.isRequired,
  tags: PropTypes.any,
  offerTags: PropTypes.any,
};

OfferTags.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferTags);
