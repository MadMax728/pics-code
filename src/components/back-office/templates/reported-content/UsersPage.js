import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import { UserCard } from "../../../misc";

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userList: null
    };
  }

  componentDidMount = () => {
    this.props.getBackOfficeReportedContent("reportedContentUsers").then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.reportedContentUsers) {
        this.setState({
          userList: this.props.reportedContentData.reportedContentUsers
        })
      }
    });
  };

  renderUserList = () => {
    const { userList } = this.state;
    
    return userList.map((user, index) => {
      const clearfixDiv = index % 2 === 0 ? <div className="clearfix" /> : null;
      return (
        <div key={user.id}>
          {clearfixDiv}
          <UserCard item={user} index={index} isReport/>
        </div>
      );
    });
  };

  render() {
    const { userList } = this.state;
    const { isLoading } = this.props;
    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        {userList && !isLoading && this.renderUserList()}
        {isLoading && <CampaignLoading />}
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
  getBackOfficeReportedContent
};

UsersPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);