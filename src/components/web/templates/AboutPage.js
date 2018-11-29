import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAbout } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { AboutCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";

// remove when actual about API calling

import { Auth } from "../../../auth";
import jwtDecode from "jwt-decode";
const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
 userInfo = jwtDecode(storage.accessToken);
}
// ----------

class AboutPage extends Component {
  componentDidMount = () => {
    // if (this.props.match.params.id) {
    //   this.props.getAbout("getAboutOther", this.props.match.params.id);
    // } else {
    //   this.props.getAbout("getAboutOwner");
    // }

    if (userInfo) {
      let data = {
        username: userInfo.username
      };
      this.props.getAbout("getAbout",data)      
    }

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
  match: PropTypes.any.isRequired,
  getAbout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  aboutDetails: PropTypes.any,
  error: PropTypes.any
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
