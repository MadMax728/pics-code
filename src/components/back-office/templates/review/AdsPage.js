import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import { AdCard } from "../../../misc";
import { getBackOfficeReview } from "../../../../actions";

class AdsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adList: null
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getBackOfficeReview("ads").then(()=> {
      if(this.props.adList) {
        this.setState({
          adList: this.props.adList
        })
      }
    });
  };

  renderAdList = () => {
    const { adList } = this.state;
    return adList.map(ad => {
      return (
        <div key={ad.id}>
          {ad.postType && ad.postType.toLowerCase() === enumerations.contentTypes.ad && (
            <AdCard
              item={ad}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
        </div>
      );
    });
  };

  render() {
    const { adList } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section margin-b-22">
        <ReportedSearchBar />
        {adList && !isLoading && this.renderAdList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adList: state.reviewData.ads,
  isLoading: state.reviewData.isLoading,
  error: state.reviewData.error
});

const mapDispatchToProps = {
  getBackOfficeReview
};

AdsPage.propTypes = {
  getBackOfficeReview: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  adList: PropTypes.any,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsPage);

