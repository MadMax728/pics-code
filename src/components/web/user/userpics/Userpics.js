import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImageItem, VideoItem } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import VideoPlayer from "../../../ui-kit/player/VideoPlayer";
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
        <div className="col-sm-12 margin-bottom-10">
          <h2 className="slider-modal-header">User Pics</h2>
        </div>
        <div className="col-sm-12">
          {picsDataList && (
            <div className="user-pics-carousel row">
              <Carousel autoPlay showThumbs={false} interval={500}>
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
                      <p className="legend">{picsDataRow.title}</p>
                    </div>
                  );
                })}
              </Carousel>
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
