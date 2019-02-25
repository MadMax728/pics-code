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
    this.state = { usersList: null, currentPage: 1 };
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
    window.addEventListener("scroll", this.onScroll, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };

  onScroll = () => {
    const { usersList, currentPage } = this.state;
    const currentScrollHeight = parseInt(window.innerHeight + window.scrollY);
    // console.log(currentScrollHeight, (document.body.offsetHeight));
    if (
      usersList &&
      currentScrollHeight + 1 >= document.body.offsetHeight &&
      usersList.length
    ) {
      const { lastEvaluatedKey } = this.props;
      let payload = "";
      if (currentPage < lastEvaluatedKey.pages) {
        for (let i in lastEvaluatedKey) {
          if (i === "limit") {
            payload += lastEvaluatedKey[i] && `?${i}=${lastEvaluatedKey[i]}`;
          } else {
            const currentPage = parseInt(lastEvaluatedKey[i]) + 1;
            payload += lastEvaluatedKey[i] && `&${i}=${currentPage}`;
            this.setState({ currentPage });
          }
        }
        this.props.getDashboard("users", payload).then(() => {
          const { usersList } = this.state;
          this.setState({
            usersList: usersList.concat(this.props.usersList)
          });
        });
      }
    }
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
    const { searchData, isLoadingusers } = this.props;
    usersList = search(usersList, "username", searchData.searchKeyword);
    return (
      <div className="user-wrapper">
        {usersList.map((user, index) => {
          const clearfixDiv =
            index % 2 === 0 ? <div className="clearfix" /> : null;
          return (
            <div onScroll={this.trackScrolling} key={user.id}>
              {clearfixDiv}
              <UserCard item={user} index={index} isLoading={isLoadingusers} />
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
  getSearch: PropTypes.func,
  lastEvaluatedKey: PropTypes.any
  // errorusers: PropTypes.any
};

const mapStateToProps = state => ({
  usersList: state.dashboardData.users,
  isLoadingusers: state.dashboardData.isLoadingusers,
  errorusers: state.dashboardData.errorusers,
  searchData: state.searchData,
  lastEvaluatedKey: state.lastEvaluatedKey.keys
});

const mapDispatchToProps = {
  getDashboard,
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersRoot);
