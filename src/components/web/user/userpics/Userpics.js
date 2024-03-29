import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as images from "../../../../lib/constants/images";
import { ImageItem, VideoItem } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import VideoPlayer from "../../../ui-kit/player/VideoPlayer";
import { Translations } from "../../../../lib/translations";
class Userpics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalHide();
  };

  render() {
    const { picsData } = this.props;
    const picsDataList = picsData.data;
    return (
      <div className={"col-xs-12 no-padding"}>
        {/* <div className="col-sm-12 margin-bottom-10">
          <h2 className="slider-modal-header">{Translations.user_pics}</h2>
        </div> */}
        <div className="col-sm-12">
          {picsDataList && (
            <div className="user-pics-carousel row">
              <div className="left-arrow">
                <i className="fa fa-angle-left" />
              </div>
              <div className="right-arrow">
                <i className="fa fa-angle-right" />
              </div>
              <div className="user-pic-status">
                <p />
                <p />
                <p />
              </div>
              <div className="user-pic-data">
                <div className="user-pic">
                  <img src={images.profile_pic} alt="profilepic" />
                </div>
                <div className="user-pic-name">
                  <h4 className="username">username</h4>
                  <p className="user-location">location</p>
                  <p className="user-cata">01.01.2000 in category</p>
                </div>
              </div>
              <Carousel
                autoPlay
                showThumbs={false}
                interval={500}
                showIndicators={false}
                showArrows={false}
              >
                {picsDataList.map(picsDataRow => {
                  return (
                    <div key={picsDataRow.id}>
                      {(!picsDataRow.typeContent ||
                        (picsDataRow.typeContent &&
                          picsDataRow.typeContent.toLowerCase() ===
                            enumerations.mediaTypes.image)) && (
                        <img src={picsDataRow.mediaUrl} alt="" />
                      )}
                      {picsDataRow.typeContent &&
                        picsDataRow.typeContent.toLowerCase() ===
                          enumerations.mediaTypes.video && (
                          <VideoItem
                            id={picsDataRow.id}
                            item={picsDataRow.mediaUrl}
                          />
                        )}
                      {/* <p className="legend">{picsDataRow.title}</p> */}
                    </div>
                  );
                })}
              </Carousel>

              <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12 user-pic-opt">
                <div className="col-md-6 col-sm-6 col-xs-6 text-center">
                  <p>
                    <i className="fa fa-eye" aria-hidden="true" />
                  </p>
                  <p className="option-text">0 views</p>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 text-center">
                  <p>
                    <i className="fa fa-trash" aria-hidden="true" />
                  </p>
                  <p className="option-text">delete</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

Userpics.propTypes = {
  handleModalHide: PropTypes.func,
  picsData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Userpics);
