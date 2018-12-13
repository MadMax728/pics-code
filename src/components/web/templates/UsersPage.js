import React from "react";
import UserCard from "../../misc/UserCard";
import PropTypes from "prop-types";
import { UserPicLoading } from "../../ui-kit";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";

class UsersRoot extends React.Component {
  componentDidMount = () => {
    this.props.getDashboard("user");
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
    const { usersList, isLoading } = this.props;
    return (
      <div className="padding-rl-10 middle-section">
        {usersList && !isLoading && this.renderuserList()}
        {isLoading && <UserPicLoading />}
      </div>
    );
  }
}

UsersRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  usersList: PropTypes.any,
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  usersList: state.dashboardData.user,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error
});

const mapDispatchToProps = {
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersRoot);
