import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,

  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
} from 'react-share';

const Share = ({ 
  handleModalInfoHiden, 
  shareUrl = 'http://www.picstagraph.com', 
  title  = 'Picstagraph',
  hashtag = '#picstagraph' 
}) => {
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-xs-12 no-padding share-wrapr">
          <div className="social-media-link">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              hashtag={hashtag}
              className="social-link-title">
              <FacebookIcon
                size={40}
                round={false} />
            </FacebookShareButton>
            <span className="social-link-title">Facebook</span>
          </div>
          <div className="social-media-link">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="social-link-title">
              <TwitterIcon
                size={40}
                round={false}  />
            </TwitterShareButton>
            <span className="social-link-title">Twitter</span>
          </div>
          <div className="social-media-link">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="social-link-title">
              <WhatsappIcon size={40} round={false}  />
            </WhatsappShareButton>
            <span className="social-link-title">Whatsapp</span>
          </div>
          <div className="social-media-link">
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="Picstagraph"
              className="social-link-title">
              <EmailIcon
                size={40}
                round={false} />
            </EmailShareButton>
            <span className="social-link-title">Email</span>
          </div>
        </div>
      </div>
    );
}

Share.propTypes = {
  handleModalInfoHide: PropTypes.func.isRequired,
  shareUrl : PropTypes.string,
  title : PropTypes.string,
  hashtag : PropTypes.string
};

export default Share;
