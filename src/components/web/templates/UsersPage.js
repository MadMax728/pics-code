import React from "react";
import UserCard from "../../misc/UserCard";
import PropTypes from "prop-types";
import { UserPicLoading } from "../../ui-kit";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";

class UsersRoot extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    if (this.props.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (this.props.searchData.searchKeyword) {
      this.props.getDashboard(
        "users",
        "?isSearch=" + this.props.searchData.searchKeyword
      );
    } else {
      this.props.getDashboard("users", "");
    }
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      let searchParam = "";
      if (searchKeyword) {
        searchParam = "?isSearch=" + searchKeyword;
      }
      this.props.getDashboard("users", searchParam);
    }
  };

  renderuserList = () => {
    const { usersList } = this.props;
    return (
      <div className="user-wrapper">
        {usersList.map((user, index) => {
          const clearfixDiv =
            index % 2 === 0 ? <div className="clearfix" /> : null;
          return (
            <div key={index}>
              {clearfixDiv}
              <UserCard item={user} index={index} />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { usersList, isLoadingusers } = this.props;
    return (
      <div className="padding-rl-10 middle-section">
        {usersList && !isLoadingusers && this.renderuserList()}
        {isLoadingusers && <UserPicLoading />}
      </div>
    );
  }
}

UsersRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoadingusers: PropTypes.bool,
  usersList: PropTypes.any,
  searchData: PropTypes.any,
  getSearch: PropTypes.func
  // errorusers: PropTypes.any
};

const mapStateToProps = state => ({
  usersList: state.dashboardData.users,
  isLoadingusers: state.dashboardData.isLoadingusers,
  errorusers: state.dashboardData.errorusers,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getDashboard,
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersRoot);
