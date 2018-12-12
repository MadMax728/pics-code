import React from "react";
import { PictureCard } from "../../misc";
import PropTypes from "prop-types";
import { UserPicLoading } from "../../ui-kit";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";

class PicturesRoot extends React.Component {
  componentDidMount = () => {
    this.props.getDashboard("getPic");
  };

  renderuserList = () => {
    const { picsList } = this.props;
    return picsList.map((pic, index) => {
      const clearfixDiv = index % 2 === 0 ? <div className="clearfix" /> : null;
      return (
        <div key={pic.id}>
          {clearfixDiv}
          <PictureCard item={pic} index={index} />
        </div>
      );
    });
  };

  render() {
    const { picsList, isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        {picsList && !isLoading && this.renderuserList()}
        {isLoading && <UserPicLoading />}
      </div>
    );
  }
}

PicturesRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  picsList: PropTypes.any,
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  picsList: state.dashboardData.dashboard,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error
});

const mapDispatchToProps = {
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicturesRoot);
