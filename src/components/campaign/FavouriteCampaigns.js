import React, { Component } from "react";
import * as images from "../../constants/images";

class FavouriteCampaigns extends Component {
  render() {
    return (
      <div>
        <div className="normal_title padding-15">Favourite Campaigns</div>
        <div className="campaigns">
          <div className="campaign_wrapper">
            <div className="col-sm-4 col-xs-2">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-8 col-xs-10 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
          </div>
          <div className="campaign_wrapper">
            <div className="col-sm-4 col-xs-2">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-8 col-xs-10 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
          </div>
          <div className="campaign_wrapper">
            <div className="col-sm-4 col-xs-2">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-8 col-xs-10 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
          </div>
          <div className="campaign_wrapper">
            <div className="col-sm-4 col-xs-2">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-8 col-xs-10 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
          </div>
          <div className="campaign_wrapper">
            <div className="col-sm-4 col-xs-2">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-8 col-xs-10 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
          </div>
          <div className="campaign_wrapper">
            <div className="col-sm-4 col-xs-2">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-8 col-xs-10 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FavouriteCampaigns;
