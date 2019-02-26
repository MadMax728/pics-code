import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Auth } from "../../../auth";
import { RenderToolTips } from "../../common";
import { Translations } from "../../../lib/translations";
import { reportType, modalType } from "../../../lib/constants";
import { like, getComments, setSavedPost, addReport } from "../../../actions";
import { getBackendPostType } from "../../Factory";

class ReportTips extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            item: null,
            userInfo: null,
        };
    }

    componentDidMount = () => {
        const { item } = this.props;
        const storage = Auth.extractJwtFromStorage();
        let userInfo = null;
        if (storage) {
            userInfo = JSON.parse(storage.userInfo);
        }
        this.setState({ userInfo, item});
    }

    handleEdit = () => {
        this.props.handleEdit();
    }

    handleSavePost = e => {
        const { isSavedPage } = this.props;
        const { item } = this.state;
        const data = {
            post: e.target.id,
            postType: getBackendPostType(item)
        };

        this.props.setSavedPost(data).then(() => {
            const { savedData, handleRemove } = this.props;
            if (
                savedData &&
                savedData.saved &&
                savedData.saved.post === item.id
            ) {
                item.isSavedPost = !item.isSavedPost;
                this.setState({ item });
                if (isSavedPage && !item.isSavedPost) {
                    handleRemove(item.id);
                }
            }
        });
    };

    handleSetState = data => {
        clearInterval(this.timer);
        const { item } = this.state;
        const { isReview, handleRemove } = this.props;
        if (isReview) {
            item.contentStatus = data.contentStatus;
        } else {
            item.reportStatus = data.contentStatus;
        }
        this.setState({ item });
        handleRemove(item.id);
    };

    handleDoNotContent = e => {
        const { isReview } = this.props;
        const { item } = this.state;
    
        let data;

        if (isReview) {
            data = {
                id: e.target.id,
                contentStatus: reportType.doNotLock,
                reportContent: getBackendPostType(item),
                isReview
            };
        } else {
            data = {
                typeId: e.target.id,
                contentStatus: reportType.doNotLock,
                reportContent: getBackendPostType(item),
            };
        }

        this.props.handleModalInfoDetailsCallbackShow(
            modalType.processed,
            data,
            () => {
                this.handleSetState(data);
            }
        );
    };

    handleLockContent = e => {
        const { isReview } = this.props;
        const { item } = this.state;
        let data;
        if (isReview) {
            data = {
                id: e.target.id,
                contentStatus: reportType.lock,
                reportContent: getBackendPostType(item),
                isReview
            };
        } else {
            data = {
                typeId: e.target.id,
                contentStatus: reportType.lock,
                reportContent: getBackendPostType(item),
            };
        }
        this.props.handleModalInfoDetailsCallbackShow(
            modalType.processed,
            data,
            () => {
                this.handleSetState(data);
            }
        );
    };

    handleUnlockContent = e => {
        const { isReview } = this.props;
        const { item } = this.state;
        let data;

        if (isReview) {
            data = {
                id: e.target.id,
                contentStatus: reportType.unLock,
                reportContent: getBackendPostType(item),
                isReview
            };
        } else {
            data = {
                typeId: e.target.id,
                contentStatus: reportType.unLock,
                reportContent: getBackendPostType(item)
            };
        }
        this.props.handleModalInfoDetailsCallbackShow(
            modalType.processed,
            data,
            () => {
                this.handleSetState(data);
            }
        );
    };

    handleReportPost = e => {
        const { item } = this.state;
        const data = {
            typeContent: getBackendPostType(item),
            typeId: e.target.id,
            title: item.title
        };
        this.props.addReport(data).then(() => {
            const { reportedContentData } = this.props;
            if (
                reportedContentData &&
                reportedContentData &&
                reportedContentData.addReport &&
                reportedContentData.addReport.typeId === item.id
            ) {
                item.isReported = !item.isReported;
                this.setState({ item });
            }
        });
    };

    render() {
        const { item, userInfo } = this.state;
        const { isBackOffice, isReview } = this.props;
        let reportTips;
        if (isBackOffice) {
            reportTips = [
                {
                    name: isReview
                        ? item && item.contentStatus === reportType.lock
                            ? Translations.tool_tips.unlock
                            : Translations.tool_tips.lock
                        : item && item.reportStatus === reportType.lock
                            ? Translations.tool_tips.unlock
                            : Translations.tool_tips.lock,
                    handleEvent: isReview
                        ? item && item.contentStatus === reportType.lock
                            ? this.handleUnlockContent
                            : this.handleLockContent
                        : item && item.reportStatus === reportType.lock
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
                    name: item && item.isReported
                        ? Translations.tool_tips.unreport
                        : Translations.tool_tips.report,
                    handleEvent: this.handleReportPost
                },
                {
                    name: item && item.isSavedPost
                        ? Translations.tool_tips.unsave
                        : Translations.tool_tips.save,
                    handleEvent: this.handleSavePost
                }
            ];
            if (item && item.createdBy === userInfo.id) {
                const data = {
                    name: Translations.tool_tips.edit_post,
                    handleEvent: this.handleEditPost
                }
                reportTips.unshift(data);
            }
        }

        return (
            <div className="post-action-links" > {item && <RenderToolTips items={reportTips} id={item.id} />}</div>
        );
    }
}

ReportTips.propTypes = {
    item: PropTypes.object.isRequired,
    isBackOffice: PropTypes.bool,
    isSavedPage: PropTypes.bool,
    isReview: PropTypes.bool,
    handleModalInfoDetailsCallbackShow: PropTypes.func,
    addReport: PropTypes.func.isRequired,
    reportedContentData: PropTypes.any,
    handleRemove: PropTypes.func,
    setSavedPost: PropTypes.func.isRequired,
    savedData: PropTypes.any,
    handleEdit: PropTypes.func
};

const mapStateToProps = state => ({
    savedData: state.savedData,
    reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
    like,
    getComments,
    setSavedPost,
    addReport
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportTips);
