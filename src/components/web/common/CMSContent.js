import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWebCMSManagement, getSearch } from "../../../actions";
import { Translations } from "../../../lib/translations";
import { Auth } from "../../../auth";
import { DescriptionItem } from "../../misc/items";
import * as routes from "../../../lib/constants/routes";

class CMSContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cmsDetail: null,
      title: this.props.title,
      language: Translations.languages.english,
      searchKeyword: this.props.searchData.searchKeyword
    };
  }

  render() {
    const { cmsDetail } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12 no-padding">
          <div className="panel-wrapper mar-btm-5">
            <div className="cms-page-content other-pages-content">
              {cmsDetail && cmsDetail.description && (
                <DescriptionItem desc={cmsDetail.description} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;

    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) {
      this.setState({ language: userInfo.language });
    }

    const data = {
      title: this.state.title,
      language: this.state.language
    };

    this.props.getWebCMSManagement(data).then(() => {
      const { cmsManagementData } = this.props;
      if (cmsManagementData && cmsManagementData.cmsDetail) {
        this.setState({ cmsDetail: cmsManagementData.cmsDetail });
      }
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchData.searchKeyword !== prevState.searchKeyword) {
      nextProps.history.push(
        routes.ROOT_ROUTE + "?search=" + nextProps.searchData.searchKeyword
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  cmsManagementData: state.cmsManagementData,
  searchData: state.searchData
});

CMSContent.propTypes = {
  getWebCMSManagement: PropTypes.func.isRequired,
  cmsManagementData: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  searchData: PropTypes.any.isRequired,
  getSearch: PropTypes.func.isRequired,
  history: PropTypes.any
};

const mapDispatchToProps = {
  getWebCMSManagement,
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CMSContent);
