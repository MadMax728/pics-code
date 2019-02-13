import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import { Translations } from "../../../../lib/translations";

const Share = ({ 
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
            <span className="social-link-title">{Translations.social.facebook}</span>
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
            <span className="social-link-title">{Translations.social.twitter}</span>
          </div>
          <div className="social-media-link">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="social-link-title">
              <WhatsappIcon size={40} round={false}  />
            </WhatsappShareButton>
            <span className="social-link-title">{Translations.social.whatsapp}</span>
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
            <span className="social-link-title">{Translations.social.email}</span>
          </div>
        </div>
      </div>
    );
}

Share.propTypes = {
  shareUrl : PropTypes.string,
  title : PropTypes.string,
  hashtag : PropTypes.string
};

export default Share;
