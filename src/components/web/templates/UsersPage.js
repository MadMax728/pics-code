import React from "react";
import UserCard from "../../misc/UserCard";
import PropTypes from "prop-types";
import { UserPicLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";
import { search } from "../../../lib/utils/helpers";

class UsersRoot extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { usersList: null };
  }

  render() {
    let { usersList } = this.state;
    const { isLoadingusers, searchData } = this.props;
    usersList = search(usersList, "username", searchData.searchKeyword);
    return (
      <div className="padding-rl-10 middle-section">
        {usersList && !isLoadingusers && this.renderuserList()}
        {isLoadingusers && <UserPicLoading />}
        {!isLoadingusers &&
          (!usersList || (usersList && usersList.length === 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.handleRefresh();
    this.handleSearch();
  };

  handleSearch = () => {
    this.props.getDashboard("users", "").then(() => {
      const { usersList } = this.props;
      this.setState({ usersList });
    });
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
      this.handleSearch();
    }
  };

  renderuserList = () => {
    let { usersList } = this.state;
    const { searchData } = this.props;
    usersList = search(usersList, "username", searchData.searchKeyword);
    return (
      <div className="user-wrapper">
        {usersList.map((user, index) => {
          const clearfixDiv =
            index % 2 === 0 ? <div className="clearfix" /> : null;
          return (
            <div key={user.id}>
              {clearfixDiv}
              <UserCard item={user} index={index} />
            </div>
          );
        })}
      </div>
    );
  };
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
