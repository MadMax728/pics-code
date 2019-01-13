import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import { UserCard } from "../../../misc";
import { Translations } from "../../../../lib/translations";

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userList: null
    };
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "User"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
  };
  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.User) {
        this.setState({
          userList: this.props.reportedContentData.User,
          isLoading: this.props.reportedContentData.isLoading
        })
      }
    });
  }

  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.UserStatistics) {
        // success
      }
    });
  }

  handleReported = (e) => {
    let data;
    if (e.target.id === "All")
    {
      data ={
        type: "get",
        reportContent: "User"
      }
      this.setState({isSearch: false});
    }
    else {
      data = {
        type: "search",
        reportContent: "User",
        searchType: `${e.target.id}`
      }
      this.setState({isSearch: true});
    }
    this.getBackOfficeReportedContent(data);
  }
  
  handleRemove = (data) => {
    const { userList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({userList: userList.filter(e => e.id !== data)});
    }
  }

  renderUserList = () => {
    const { userList } = this.state;

    return userList.map((user, index) => {
      const clearfixDiv = index % 2 === 0 ? <div className="clearfix" /> : null;
      return (
        <div key={user.id}>
          {clearfixDiv}
          <UserCard 
            item={user} 
            index={index} 
            isReport 
            isBackOffice 
            handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow}
            handleRemove={this.handleRemove}
          />
        </div>
      );
    });
  };

  render() {
    const { userList, isLoading } = this.state;
    const { reportedContentData } = this.props;
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar />
          {userList && !isLoading && this.renderUserList()}
          {isLoading && <CampaignLoading />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.user}`} 
            handleEvent={this.handleReported} 
            all={reportedContentData.UserStatistics? reportedContentData.UserStatistics.all : 0} 
            outstanding={reportedContentData.UserStatistics? reportedContentData.UserStatistics.outstanding : 0}
            processed={reportedContentData.UserStatistics? reportedContentData.UserStatistics.processed : 0} 
            notProcessed={reportedContentData.UserStatistics? reportedContentData.UserStatistics.notProcessed : 0}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics
};

UsersPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
