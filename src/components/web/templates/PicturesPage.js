import React from "react";
import { PictureCard } from "../../misc";
import PropTypes from "prop-types";
import { UserPicLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";

class PicturesRoot extends React.Component {
  render() {
    const { picsList, isLoadingpics } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        {picsList && !isLoadingpics && this.renderuserList()}
        {isLoadingpics && <UserPicLoading />}
        {!isLoadingpics &&
          (!picsList || (picsList && picsList.length === 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getDashboard("pics");
  };

  handleRefresh = () => {};

  renderuserList = () => {
    const { picsList, history } = this.props;
    return picsList.map((pic, index) => {
      const clearfixDiv = index % 2 === 0 ? <div className="clearfix" /> : null;
      return (
        <div key={pic.id}>
          {clearfixDiv}
          <PictureCard item={pic} index={index} history={history} />
        </div>
      );
    });
  };
}

PicturesRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoadingpics: PropTypes.bool,
  picsList: PropTypes.any,
  history: PropTypes.any
  // errorpics: PropTypes.any
};

const mapStateToProps = state => ({
  picsList: state.dashboardData.pics,
  isLoadingpics: state.dashboardData.isLoadingpics,
  errorpics: state.dashboardData.errorpics
});

const mapDispatchToProps = {
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicturesRoot);
