import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAbout } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { AboutCard } from "../../misc";
// remove when actual about API calling
import { Auth } from "../../../auth";

class AboutPage extends Component {
  componentDidMount = () => {
    // if (this.props.match.params.id) {
    //   this.props.getAbout("getAboutOther", this.props.match.params.id);
    // } else {
    //   this.props.getAbout("getAboutOwner");
    // }
    const data = Auth.extractJwtFromStorage();
    this.props.getAbout("getAbout", data);
  };

  renderAbout = () => {
    const { aboutDetails } = this.props;
    return <AboutCard about={aboutDetails} />;
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
  // match: PropTypes.any.isRequired,
  getAbout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  aboutDetails: PropTypes.any,
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  aboutDetails: state.aboutData.about,
  isLoading: state.aboutData.isLoading,
  error: state.aboutData.error
});

const mapDispatchToProps = {
  getAbout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
