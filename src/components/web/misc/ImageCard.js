import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageCardHeader from "./headers/ImageCardHeader";
import ImageCardBody from "./body/ImageCardBody";
import ImageCardFooter from "./footers/ImageCardFooter";
import { Translations } from "../../../lib/translations";
import { RenderToolTips } from "../../common";
import CommentCard from "./CommentCard";

class ImageCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false
    };
  }

  renderReportTips = () => {
    const reportTips = [
      {
        name: Translations.tool_tips.report,
        handleEvent: this.handleReportPost
      },
      {
        name: Translations.tool_tips.save,
        handleEvent: this.handleSavePost
      },
      {
        name: Translations.tool_tips.lock,
        handleEvent: this.handleContent
      }
    ];
    return <RenderToolTips items={reportTips} id={this.props.item.id} />;
  };

  handleReportPost = () => {};

  handleSavePost = () => {};

  handleContent = () => {};

  handleFavorite = e => {};

  handleCommentsSections = () => {
    this.setState({ isComments: !this.state.isComments });
  };

  render() {
    const { item } = this.props;
    const { isComments } = this.state;

    return (
      <div className="feed_wrapper">
        <ImageCardHeader image={item} handleFavorite={this.handleFavorite} />
        <ImageCardBody image={item} />
        <ImageCardFooter
          image={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          renderReportTips={this.renderReportTips}
          handleFavorite={this.handleFavorite}
        />
        {isComments && <CommentCard item={item} />}
      </div>
    );
  }
}

ImageCard.propTypes = {
  item: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      isOwner: PropTypes.bool
    }).isRequired,
    title: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    msg_count: PropTypes.number,
    like_count: PropTypes.number,
    id: PropTypes.number
  }).isRequired
};

export default ImageCard;
