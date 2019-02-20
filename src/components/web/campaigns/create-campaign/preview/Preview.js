import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { Auth } from "../../../../../auth";
import { DateFormat } from "../../../../Factory";
import { Translations } from "../../../../../lib/translations";
import { DescriptionItem } from "../../../../misc/items";

const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
}

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
  }


  render() {
    const { form } = this.props;
    const todayDate = new Date();

    return (
      <div className="col-xs-12 no-padding">
        <div className="padding-l-10 middle-section width-100">
          <div className="info-main-title">{form.title && form.title}</div>
          <div className="information-wrapper overflow-y">
            <div className="info-inner-wrapper">
              {form.fileType && form.image && (
                <img src={form.image} alt={"information"} />
              )}
              {!form.fileType && form.video && (
                <video controls>
                  <track kind="captions" />
                  <source src={form.video} type={form.file.type} />
                </video>
              )}
              <div className="text paddTop20">
                {form.description && (
                  <DescriptionItem desc={form.description} />
                )}
              </div>
              <div className="feed_wrapper">
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <img
                      src={
                        userInfo && userInfo.profileUrl
                          ? userInfo.profileUrl
                          : images.image
                      }
                      alt="circle-img-1"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-9 col-xs-7 no-padding">
                    <div className="normal_title">
                      {form.title && form.title}
                    </div>
                    <div className="secondary_title">
                      {userInfo && userInfo.username && userInfo.username}
                    </div>
                    <div className="grey_title">
                      { todayDate && DateFormat(todayDate, Translations.date_format.date, true)}
                      in Category
                    </div>
                  </div>
                  <div className="col-sm-2 col-xs-2 like_wrapper">
                    {/* <img
                      src={images.blue_heart}
                      alt="like-1"
                      className="pull-right"
                    /> */}
                  </div>
                </div>
                <div className="feed_content">
                  <div className="feed_description">
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Start: </span>
                        <span className="secondary_title">
                          { form.startDate && DateFormat(form.startDate, Translations.date_format.date, true)}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Procedure: </span>
                        <span className="secondary_title">
                          {form.procedure}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Target group: </span>
                        <span className="secondary_title">
                          {form.targetGroup}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">End: </span>
                        <span className="secondary_title">
                          { form.endDate && DateFormat(form.endDate, Translations.date_format.date, true)}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">
                          {form.typeContent}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    if (userInfo) {
      this.setState({ userInfo });
    }
  };

}

Preview.propTypes = {
  form: PropTypes.any.isRequired
};

export default Preview;
