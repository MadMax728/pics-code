import React, { Component } from "react";
import PropTypes from "prop-types";
import CampaignCardHeader from "./headers/CampaignCardHeader";
import CampaignCardBody from "./body/CampaignCardBody";
import CampaignCardFooter from "./footers/CampaignCardFooter";
import { Translations } from "../../../lib/translations";
import { RenderToolTips } from "../../common";
import CommentCard from "./CommentCard";
import { like } from "../../../actions/like";
import { getComments } from "../../../actions/comments";
import connect from "react-redux/es/connect/connect";

class CampaignCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item,
      comments: ""
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

  handleFavorite = e => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    let campaignLike = {
      typeOfContent: "campaign",
      typeId: item.id
    };
    this.props.like(campaignLike);
  };

  handleCommentsSections = () => {
    let CampaignId = {
      typeId: this.state.item.id
    };
    this.props.getComments(CampaignId).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments
      });
    });
  };

  load = data => {
    let listLoaded = this.props.comments[data.id] ? true : false;
    this.setState(
      {
        commentsArr: listLoaded ? this.props.comments[data.id] : [],
        postInfo: data,
        listLoaded
      },
      () => (!listLoaded ? this._setComments(data) : null)
    );
  };

  //   _setComments = (postInfo) => {
  //     let cb = {
  //         success: (res) => {
  //             this.setState({
  //                 commentsArr: res.data,
  //                 listLoaded: true
  //             });
  //             this.props.getComments({ id: postInfo.id, data: res.data })
  //         },
  //         error: (err) => {
  //             this.props.getComments({ id: postInfo.id, data: [] })
  //             this.setState({ listLoaded: true })
  //         }
  //     }
  //     let header = helpers.buildHeader({ authorization: this.props.loginData.token })
  //     let data = { typeId: postInfo.id }
  //     API.commentsGetApi(data, cb, header);
  // }

  render() {
    const { isStatus, isDescription, isInformation } = this.props;
    const { isComments, item } = this.state;

    return (
      <div className="feed_wrapper">
        <CampaignCardHeader
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
          handleFavorite={this.handleFavorite}
        />
        <CampaignCardBody
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
        />
        <CampaignCardFooter
          campaign={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          isStatus={isStatus}
          renderReportTips={this.renderReportTips}
          handleFavorite={this.handleFavorite}
        />
        {isComments && <CommentCard item={this.state.comments} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likeData: state.likeData,
  comments: state.commentData.comments
});

const mapDispatchToProps = {
  like,
  getComments
};

CampaignCard.propTypes = {
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.object,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isStatus: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignCard);
