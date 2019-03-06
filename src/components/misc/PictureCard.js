import React, { Component } from "react";
import PropTypes from "prop-types";
import PictureCardBody from "./body/PictureCardBody";
import * as enumerations from "../../lib/constants/enumerations";
import { modalType } from "../../lib/constants";
import { addReport } from "../../actions";
import { connect } from "react-redux";
import { Translations } from "../../lib/translations";
import { RenderToolTips } from "../common";

class PictureCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: this.props.item,
      index: this.props.index
    };
  }

  render() {
    const { item, index } = this.state;
    const {
      isReport,
      history,
      reportedContentData,
      isBackOffice,
      handleModalShow
    } = this.props;
    return (
      <div>
        <PictureCardBody
          pic={item}
          index={index}
          isReport={isReport}
          history={history}
          /* eslint-disable */ renderReportTips={() =>
            this.renderReportTips(item.id)
          }
          isLoading={reportedContentData.isLoading}
          isBackOffice={isBackOffice}
          handleModalShow={handleModalShow}
        />
      </div>
    );
  }

  renderReportTips = id => {
    let reportTips;
    const { isBackOffice, isBudget } = this.props;
    const { item } = this.state;
    if (isBackOffice) {
      reportTips = [
        {
          name: isBudget
            ? item.contentStatus === enumerations.reportType.lock
              ? Translations.tool_tips.unlock
              : Translations.tool_tips.lock
            : item.reportStatus === enumerations.reportType.lock
            ? Translations.tool_tips.unlock
            : Translations.tool_tips.lock,
          handleEvent: isBudget
            ? item.contentStatus === enumerations.reportType.lock
              ? this.handleUnlockContent
              : this.handleLockContent
            : item.reportStatus === enumerations.reportType.lock
            ? this.handleUnlockContent
            : this.handleLockContent
        },
        {
          name: Translations.tool_tips.do_not,
          handleEvent: this.handleDoNotContent
        }
      ];
    } else {
      reportTips = [
        {
          name: item.isReported
            ? Translations.tool_tips.unreport
            : Translations.tool_tips.report,
          handleEvent: this.handleReportPost
        }
      ];
    }
    return <RenderToolTips items={reportTips} id={id} />;
  };

  handleUnlockContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.unLock,
      reportContent: "Pics"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleDoNotContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.doNotLock,
      reportContent: "Pics"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleLockContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.lock,
      reportContent: "Pics"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleSetState = data => {
    clearInterval(this.timer);
    const { item } = this.state;
    item.reportStatus = data.contentStatus;
    this.setState({ item });
    this.props.handleRemove(item.id);
  };

  handleReportPost = e => {
    const { item } = this.state;
    const data = {
      typeId: e.target.id,
      typeContent: "Pics",
      title: item.title,
      subType: item.typeContent
    };
    this.props.addReport(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData &&
        this.props.reportedContentData.addReport.typeId === item.id
      ) {
        item.isReported = !item.isReported;
        this.setState({ item });
      }
    });
  };
}

PictureCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  addReport: PropTypes.func.isRequired,
  reportedContentData: PropTypes.any,
  isReport: PropTypes.bool,
  history: PropTypes.any,
  isBackOffice: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  handleRemove: PropTypes.func,
  handleModalShow: PropTypes.any
};

const mapStateToProps = state => ({
  totalCommentsCount: state.totalCommentsCount,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  addReport
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureCard);
