import React, { Component } from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import { getInquiryTag, addInquiryTag } from "../../../actions";
import { connect } from "react-redux";

class InquiryTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionsInquiryTagList: []
    };
  }

  render() {
    const { suggestionsInquiryTagList } = this.state;
    const { value } = this.props;

    return (
      <Tags
        value={value}
        suggestion={suggestionsInquiryTagList}
        handleAddition={this.handleInquiryTagChange}
        handleDelete={this.handleInquiryTagDelete}
      />
    );
  }

  componentDidMount = () => {
    this.props.getInquiryTag().then(() => {
      if (this.props.inquiryTags) {
        this.setState({
          suggestionsInquiryTagList: this.props.inquiryTags
        });
      }
    });
  };

  componentWillUnmount = () => {
    this.setState({ suggestionsInquiryTagList: [] });
  };

  handleInquiryTagDelete = id => {
    this.props.handleInquiryTagDelete(id);
  };

  handleInquiryTagChange = tag => {
    const { suggestionsInquiryTagList } = this.state;
    const indexOf = suggestionsInquiryTagList.findIndex(f => {
      return f.id === tag.id;
    });

    if (indexOf === -1) {
      const tagName = {
        inquiryTagName: tag.text
      };
      this.props.addInquiryTag(tagName).then(() => {
        if (
          this.props.tags &&
          this.props.tags.addedInquiryTags &&
          this.props.tags.addedInquiryTags
        ) {
          this.props.handleInquiryTagChange(
            this.props.tags.addedInquiryTags.data.id,
            this.props.tags.addedInquiryTags.data
          );
        }
      });
    } else {
      this.props.handleInquiryTagChange(tag.id, tag);
    }
  };
}

const mapStateToProps = state => ({
  inquiryTags: state.tags.inquiryTags,
  tags: state.tags
});

const mapDispatchToProps = {
  getInquiryTag,
  addInquiryTag
};

const propTypes = {
  value: PropTypes.any,
  handleInquiryTagChange: PropTypes.func.isRequired,
  handleInquiryTagDelete: PropTypes.func.isRequired,
  getInquiryTag: PropTypes.func.isRequired,
  addInquiryTag: PropTypes.func.isRequired,
  tags: PropTypes.any,
  inquiryTags: PropTypes.any
};

InquiryTags.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InquiryTags);
