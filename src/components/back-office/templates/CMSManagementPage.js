import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import { CustomBootstrapTable } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import { getCMSManagement } from "../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DateFormat } from "../../Factory";
import { SelectLanguage } from "../../common";
import { modalType } from "../../../lib/constants/enumerations";
import CustomeTableLoader from "../../ui-kit/loading-indicator/CustomeTableLoader";

class CMSManagementPage extends Component {
 
  constructor(props, context) {
    super(props, context);
    this.state = {
      cmsManagement: null,
      language: Translations.base_footer.language
    };
  }

  optionsFormatter = (cell, row, rowIndex) => {   
    const data = { 
      title: row.title,
      url: row.url,
      pageLanguage: row.pageLanguage,
      displayPage: row.displayPage,
      description: row.description
    }

    return (
      <div key={rowIndex}>
        <Link to={`${routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}/${row.id}`}>Edit</Link>
        <div role="button" tabIndex="0" onKeyDown={this.handleKeyDown}  onClick={() => this.handlePreview(data)}>Preview</div>
      </div>
    );
  };

  handleKeyDown = () => {}

  // https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
  // used for formatter
  statusFormatter = (cell, row, rowIndex) => {
    return (
      <div key={rowIndex}>
        <span className={`${row.status}-circle`} /> Active{" "}
      </div>
    );
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { cmsManagementData } = this.props;

    this.props.getCMSManagement("/cmspages").then(()=> {
      if(cmsManagementData && cmsManagementData.cmsManagement) {
        this.setState({
          cmsManagement: cmsManagementData.cmsManagement
        })
      }
    });
  };

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  recentFormatter  = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        {row.updatedAt && DateFormat(row.updatedAt, Translations.date_format.time, true)}
      </div>
    );
  };

  renderCMSManagement = () => {
    const { cmsManagement } = this.state;
    const columns = [
      {
        dataField: "title",
        text: Translations.cms.title_of_page,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "pageLanguage",
        text: Translations.cms.language,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "most_recent_change",
        text: Translations.cms.most_recent_change,
        align: "left",
        headerAlign: "left",
        sort: false,
        formatter: this.recentFormatter
      },
      {
        dataField: "username",
        text: Translations.cms.created_by,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "options",
        text: Translations.cms.options,
        align: "left",
        headerAlign: "left",
        sort: false,
        formatter: this.optionsFormatter
      },
      {
        dataField: "status",
        text: Translations.cms.status,
        align: "left",
        headerAlign: "left",
        sort: false,
        formatter: this.statusFormatter
      }
    ];
    const pagination = {
      page: 1, // Specify the current page. It's necessary when remote is enabled
      sizePerPage: 5, // Specify the size per page. It's necessary when remote is enabled
      pageStartIndex: 1, // first page will be 0, default is 1
      paginationSize: 5, // the pagination bar size, default is 5
      hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      prePage: "<", // Previous page button text
      nextPage: ">", // Next page button text
      firstPage: "<<", // First page button text
      lastPage: ">>", // Last page button text
      showTotal: true, // display pagination information
      hideSizePerPage: true, // hide the size per page dropdown
      paginationTotalRenderer: this.customTotal,
      sizePerPageList: [
        {
          text: "5",
          value: 5
        },
        {
          text: "10",
          value: 10
        },
        {
          text: "All",
          value: cmsManagement.length
        }
      ]
    };

    const defaultSorted = [
      {
        dataField: "title",
        order: "desc"
      }
    ];

    return (
      <div className="dashboard-tbl">
        <CustomBootstrapTable
          data={cmsManagement}
          columns={columns}
          striped
          hover
          bordered={false}
          condensed
          defaultSorted={defaultSorted}
          pagination={pagination}
          noDataIndication="Table is Empty"
          id={"title"}
        />
      </div>
    )
  }

  handleSelect = (isFor , selected) => {
    this.setState({ language: selected });
    if (this.state.language !== selected)
    {
      const url = selected === Translations.base_footer.language? `` : `?language=${selected}`;
      this.props.getCMSManagement(url).then(()=> {
        if(this.props.cmsManagementData && this.props.cmsManagementData.cmsManagement) {
          this.setState({
            cmsManagement: this.props.cmsManagementData.cmsManagement
          })
        }
      });
    }
  }

  handlePreview = (data) => {
    this.props.handleModalInfoDetailsShow(modalType.cmsPreview,data);
  }

  render() {
    const { cmsManagement, language } = this.state;

    return (
      <div className="padding-rl-10 middle-section width-80">
       <div className="dashboard-middle-section margin-bottom-50">
          <div className="title_with_dropdown">
            <span>{Translations.cms.cms}</span>
            <Link to={routes.BACK_OFFICE_CREATE_CMS_ROUTE}>
              <button className="expandDrop">
                <i className="glyphicon glyphicon-plus-sign" />
              </button>{" "}
            </Link>
            <SelectLanguage 
              value={language}
              handleSelect={this.handleSelect}
            />
          </div>
          {/* <CustomeTableLoader /> */}
          {cmsManagement && this.renderCMSManagement()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cmsManagementData: state.cmsManagementData
});

const mapDispatchToProps = {
  getCMSManagement
};

CMSManagementPage.propTypes = {
  getCMSManagement: PropTypes.func.isRequired,
  cmsManagementData: PropTypes.object,
  handleModalInfoDetailsShow: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CMSManagementPage);

