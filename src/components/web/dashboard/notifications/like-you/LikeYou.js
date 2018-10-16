import React, { Component } from "react";
import { likeYou_list } from "../../../../../mock-data";

class LikeYou extends Component {
  render() {
    return (
      <div className="tab-pane fade active in" id="nav-like">
        <div className="header-notifications">
          {likeYou_list.map((like_you, index) => {
            return (
              <div
                className="notification-with-subscribe notification-wrapper"
                key={index}
              >
                <img src={like_you.image} alt={"image1"} />
                <div className="user-info">
                  <div className="username">{like_you.username}</div>
                  <div className="subtitle">Subscribed to your profile</div>
                  <div className="date">{like_you.date}</div>
                </div>
                {like_you.isMessage && (
                  <div className="subscribe-btn">
                    <button className="filled_button">Message</button>
                  </div>
                )}
                {like_you.isLikeToo && (
                  <div className="subscribe-btn">
                    <button className="blue_button">Like you too</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default LikeYou;
