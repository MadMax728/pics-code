import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackOfficeReportedContent, getBackOfficeReportedStatistics, getSearch } from "../../../../actions";

import ReportedSearchBar from "../ReportedSearchBar";
import { CampaignLoading, RightSidebarStatistics, NoDataFoundCenterPage } from "../../../ui-kit";
import { UserCard } from "../../../misc";

import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userList: null,
      form: {
        search: ""
      }
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
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
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
    let { userList, form } = this.state;
    const { searchData } = this.props;
    userList = search(userList, "username", form.search || searchData.searchKeyword);

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

  handleSearch = (event) => {
    event.preventDefault();
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  }
  
  handleRefresh = () => {
    const { searchData, getSearch } = this.props;

    if (searchData.searchKeyword) {
      getSearch("");
      const data = {
        type: "get",
        reportContent: "User"
      }
      this.setState({isLoading: true});
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
  }

  render() {
    const { searchData } = this.props;
    let { userList, form, isLoading } = this.state;
    userList = search(userList, "username", form.search || searchData.searchKeyword);
    const { reportedContentData } = this.props;
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          { userList && !isLoading && this.renderUserList() }
          { isLoading && <CampaignLoading />}
          { !isLoading && userList && userList.length === 0 && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
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
  error: state.reportedContentData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics,
  getSearch
};

UsersPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
