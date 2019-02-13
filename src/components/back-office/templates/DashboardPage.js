import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackOfficeDashboard } from "../../../actions";

import { CustomBootstrapTable } from "../../ui-kit";

import { Translations } from "../../../lib/translations";
import * as enumerations from "../../../lib/constants/enumerations";
import * as routes from "../../../lib/constants/routes";
import { Auth } from "../../../auth";

class DashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchKeyword: this.props.searchData.searchKeyword,      
      key_statistics: null,
      content_statistics: null,
      campaign_statistics_company: null,
      ads_statisitcs: null,
      isRank: false
    };
  }

  render() {
    const {
      key_statistics,
      content_statistics,
      campaign_statistics_company,
      ads_statisitcs,
      isRank
    } = this.state;

    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">
            {Translations.landing.Navigation}
          </div>
          <div className="review-report-btns">
            <Link to={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}>
              <button className="filled_button pull-left">
                {Translations.landing.Review}
              </button>{" "}
            </Link>
            <Link to={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}>
              <button className="filled_button pull-right">
                {Translations.landing.Reported_content}
              </button>
            </Link>
          </div>

          {
            !isRank && 
            <div>
              {key_statistics && this.renderKeyStatistics()}

              {/* {content_statistics && this.renderContentStatistics()}

              {campaign_statistics_company && this.renderCampaignStatisticsCompany()}

              {ads_statisitcs && this.renderAdsStatistics()} */}
            </div>
          }
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
      this.setState({isRank: userInfo.role === enumerations.adminRank.rank2});
    }

    // this.props.getBackOfficeDashboard().then(()=> {
    //   if(this.props.backOfficeDashboardData && this.props.backOfficeDashboardData.backOfficeDashboard) {
    //     this.setState({
    //       key_statistics: this.props.backOfficeDashboardData.backOfficeDashboard.key_statistics,
    //       content_statistics: this.props.backOfficeDashboardData.backOfficeDashboard. content_statistics,
    //       campaign_statistics_company: this.props.backOfficeDashboardData.backOfficeDashboard.campaign_statistics_company,
    //       ads_statisitcs: this.props.backOfficeDashboardData.backOfficeDashboard.ads_statisitcs
    //     })
    //   }
    // });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchData.searchKeyword !== prevState.searchKeyword) {
      nextProps.history.push(
        routes.ROOT_ROUTE + "?search=" + nextProps.searchData.searchKeyword
      );
    }
    return null;
  }

  renderKeyStatistics = () => {
    const { key_statistics } = this.state;
    const keyColumns = [
      {
        dataField: "registered_users",
        text: Translations.landing.Registered_users,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "active_users",
        text: Translations.landing.Active_users,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "deactivated_accounts",
        text: Translations.landing.Deactivated_accounts,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "turnover",
        text: Translations.landing.Turnover,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "reviews",
        text: Translations.landing.Reviews,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "reported_content",
        text: Translations.landing.Reported_content,
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    return (
      <div>
        <div className="title_with_dropdown">
          <span>{Translations.landing.Key_statistics}</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <CustomBootstrapTable
            data={key_statistics}
            columns={keyColumns}
            striped
            hover
            bordered={false}
            condensed
            isPagination={false}
            noDataIndication={Translations.table_empty}
            id={"registered_users"}
          />
        </div>
      </div>
    )
  }

  renderContentStatistics = () => {
    const { content_statistics } = this.state;
    const contentColumns = [
      {
        dataField: "lable",
        text: Translations.landing.Lable,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "images",
        text: Translations.landing.Images,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "videos",
        text: Translations.landing.Videos,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "campaign_company",
        text: Translations.landing.Campaign_Company,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "image_campaign",
        text: Translations.landing.Image_Campaign,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "video_campaign",
        text: Translations.landing.Video_Campaign,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "campaign_creator",
        text: Translations.landing.Campaign_Creator,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "pics",
        text: Translations.landing.Pics,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "ads",
        text: Translations.landing.Ads,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "total",
        text: Translations.landing.Total,
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    return (
      <div>
        <div className="title_with_dropdown">
          <span>{Translations.landing.Content_statistics}</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <CustomBootstrapTable
            data={content_statistics}
            columns={contentColumns}
            striped
            hover
            bordered={false}
            condensed
            isPagination={false}
            noDataIndication={Translations.table_empty}
            id={"lable"}
          />
        </div>
      </div>
    )
  }

  renderCampaignStatisticsCompany = () => {
    const { campaign_statistics_company } = this.state;
    const campaignsColumns = [
      {
        dataField: "lable",
        text: Translations.landing.Lable,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "number",
        text: Translations.landing.Number,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "active_campaign",
        text: Translations.landing.Active_Campaign,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "closed_campaign",
        text: Translations.landing.Closed_Campaign,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "campaigns_temp_closed",
        text: Translations.landing.Campaign_Temp_Closed,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "potential_turnover",
        text: Translations.landing.Potential_Turnover,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "total_turnover",
        text: Translations.landing.Total_Turnover,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "average_conv_rate",
        text: Translations.landing.Average_conv_rate_Total,
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    return (
      <div>
        <div className="title_with_dropdown">
          <span>{Translations.landing.Campaign_statistics_company}</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <CustomBootstrapTable
            data={campaign_statistics_company}
            columns={campaignsColumns}
            striped
            hover
            bordered={false}
            condensed
            isPagination={false}
            noDataIndication={Translations.table_empty}
            id={"lable"}
          />
        </div>
      </div>
    )
  }

  renderAdsStatistics = () => {
    const { ads_statisitcs } = this.state;
    const adsColumns = [
      {
        dataField: "lable",
        text: Translations.landing.Lable,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "number",
        text: Translations.landing.Number,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "active_ads",
        text: Translations.landing.Active_Ads,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "closed_ads",
        text: Translations.landing.Closed_Ads,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "ads_temp_closed",
        text: Translations.landing.Ads_Temp_Closed,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "potential_turnover",
        text: Translations.landing.Potential_Turnover,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "total_turnover",
        text: Translations.landing.Total_Turnover,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "average_conv_rate",
        text: Translations.landing.Average_conv_rate_Total,
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    return (
      <div>
        <div className="title_with_dropdown">
          <span>{Translations.landing.Ad_statisitcs}</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <CustomBootstrapTable
            data={ads_statisitcs}
            columns={adsColumns}
            striped
            hover
            bordered={false}
            condensed
            isPagination={false}
            noDataIndication={Translations.table_empty}
            id={"lable"}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  backOfficeDashboardData: state.backOfficeDashboardData,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getBackOfficeDashboard
};

DashboardPage.propTypes = {
  getBackOfficeDashboard: PropTypes.func.isRequired,
  backOfficeDashboardData: PropTypes.object,
  searchData: PropTypes.any,
  history: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);