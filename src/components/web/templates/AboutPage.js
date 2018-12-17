import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAbout } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { AboutCard } from "../../misc";
import { Auth } from "../../../auth";

class AboutPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isPrivate: false
    };
  }
  
  componentDidMount = () => {
    if (this.props.match.params.username) {
      const data = {
        username: this.props.match.params.username
      }
      this.props.getAbout("getAbout", data).then(()=> {
        console.log(this.props.aboutDetails);
        if(this.props.aboutDetails) {
          this.setState({isPrivate:  this.props.aboutDetails.isPrivate? this.props.aboutDetails.isPrivate : false})
        }
      });
    } else {
      const extractData = Auth.extractJwtFromStorage();
      const data = {
        username: extractData.username
      }
      this.props.getAbout("getAbout", data);
    }

  };

  renderAbout = () => {
    const { aboutDetails } = this.props;
    return <AboutCard about={aboutDetails} />;
  };

  render() {
    const { aboutDetails, isLoading } = this.props;
    const { isPrivate } = this.state;
    return (
      <div className={"middle-section padding-rl-10"}>
        {aboutDetails && !isLoading && !isPrivate && this.renderAbout()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

AboutPage.propTypes = {
  match: PropTypes.any.isRequired,
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
