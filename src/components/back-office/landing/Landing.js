import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import {
  key_statistics,
  content_statistics,
  campaign_statistics_company,
  ads_statisitcs
} from "../../../mock-data";
import { CustomBootstrapTable } from "../../ui-kit";

class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key_statistics,
      content_statistics,
      campaign_statistics_company,
      ads_statisitcs
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      key_statistics,
      content_statistics,
      campaign_statistics_company,
      ads_statisitcs
    } = this.state;

    const keyColumns = [
      {
        dataField: "registered_users",
        text: "Registered users",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "active_users",
        text: "Active users",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "deactivated_accounts",
        text: "Deactivated accounts",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "turnover",
        text: "Turnover",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "reviews",
        text: "Reviews",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "reported_content",
        text: "Reported content",
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    const contentColumns = [
      {
        dataField: "lable",
        text: "Lable",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "images",
        text: "Images",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "videos",
        text: "Videos",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "campaign_company",
        text: "Campaign Company",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "image_campaign",
        text: "Image Campaign",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "video_campaign",
        text: "Video Campaign",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "campaign_creator",
        text: "Campaign Creator",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "pics",
        text: "Pics",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "ads",
        text: "Ads",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "total",
        text: "Total",
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    const campaignsColumns = [
      {
        dataField: "lable",
        text: "Lable",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "number",
        text: "Number",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "active_campaign",
        text: "Active Campaign",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "closed_campaign",
        text: "Closed Campaign",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "campaigns_temp_closed",
        text: "Campaign Temp Closed",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "potential_turnover",
        text: "Potential Turnover",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "total_turnover",
        text: "Total Turnover",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "average_conv_rate",
        text: "Average conv rate Total",
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    const adsColumns = [
      {
        dataField: "lable",
        text: "Lable",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "number",
        text: "Number",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "active_ads",
        text: "Active Ads",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "closed_ads",
        text: "Closed Ads",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "ads_temp_closed",
        text: "Ads Temp Closed",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "potential_turnover",
        text: "Potential Turnover",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "total_turnover",
        text: "Total Turnover",
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "average_conv_rate",
        text: "Average conv rate Total",
        align: "left",
        headerAlign: "left",
        sort: false
      }
    ];

    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">Navigation</div>
          <div className="review-report-btns">
            <Link to={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}>
              <button className="filled_button pull-left">Review</button>{" "}
            </Link>
            <Link to={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}>
              <button className="filled_button pull-right">
                Reported content
              </button>
            </Link>
          </div>
          <div className="title_with_dropdown">
            <span>Key statistics</span>
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
              noDataIndication="Table is Empty"
              id={"registered_users"}
            />
          </div>
          <div className="title_with_dropdown">
            <span>Content statistics</span>
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
              noDataIndication="Table is Empty"
              id={"lable"}
            />
          </div>
          <div className="title_with_dropdown">
            <span>Campaign statistics company</span>
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
              noDataIndication="Table is Empty"
              id={"lable"}
            />
          </div>
          <div className="title_with_dropdown">
            <span>Ad statisitcs</span>
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
              noDataIndication="Table is Empty"
              id={"lable"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
