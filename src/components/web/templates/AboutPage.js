import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { AboutCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class AboutPage extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getProfile("getAboutOther", this.props.match.params.id);
    } else {
      this.props.getProfile("getAboutOwner");
    }
  };

  renderAbout = () => {
    const { aboutDetails } = this.props;
    return aboutDetails && <AboutCard about={aboutDetails} />;
  };

  render() {
    const { aboutDetails, isLoading } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {aboutDetails && !isLoading && this.renderAbout()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

AboutPage.propTypes = {
  match: PropTypes.any.isRequired,
  getProfile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  aboutDetails: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  aboutDetails: state.userDataByUsername.items,
  isLoading: state.userDataByUsername.isLoading,
  error: state.userDataByUsername.error
});

const mapDispatchToProps = {
  getProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
