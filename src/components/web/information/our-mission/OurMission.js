import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import * as routes from "../../../../lib/constants/routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class OurMission extends Component {
  componentWillReceiveProps = nextProps => {
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section">
          <div className="panel-wrapper">
            <div className="col-sm-6 content-wrapper padding-rl-23">
              <div className="title">Our Vision</div>
              <p>
                This text is an example text. This text is an example text.This
                text is an example text.This text is an example text.This text
                is an example text.This text is an example text.This text is an
                example text.This text is an example text.
              </p>
              <p>
                This text is an example text. This text is an example text.This
                text is an example text.This text is an example text.This text
                is an example text.This text is an example text.This text is an
                example text.This text is an example text.
              </p>
            </div>
            <div className="col-sm-6 no-padding">
              <img src={images.vision} alt={"vision"} className="width-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

OurMission.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any
};

export default connect(mapStateToProps)(OurMission);
