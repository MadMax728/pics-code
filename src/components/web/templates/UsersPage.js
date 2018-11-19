import React from "react";
import UserCard from "../../web/misc/UserCard";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../ui-kit";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";

class UsersRoot extends React.Component {
  componentDidMount = () => {
    this.props.getDashboard("getUser");
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
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

UsersRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  usersList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  usersList: state.dashboardData.dashboard,
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
