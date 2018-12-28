import React, { Component } from "react";
import { CustomBootstrapTable, ToolTip } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import { getVerifications } from "../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Username } from "../../common/username";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";

class AddVerificationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      verifications: null,
      form: {
        id: "",
        username: ""
      }
    };
  }

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    const verificationData = this.state.verifications;
    e.preventDefault();
    const data = {
      no: 4,
      username: "username5",
      name: "abc"
    };
    verificationData.push(data);
    this.setState({
      verifications: verificationData
    });
  };
  removeVerification = e => {
    const verification_Data = this.state.verifications;
    for (let i = verification_Data.length - 1; i >= 0; i--) {
      if (verification_Data[i].name === e.target.name) {
        verification_Data.splice(i, 1);
      }
    }
    this.setState({
      verifications: verification_Data
    });
  };

  statusFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        <button name={row.name} onClick={this.removeVerification}>
          {Translations.admin.Remove_Verification}
        </button>
      </div>
    );
  };

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getVerifications().then(()=> {
      if(this.props.verificationData && this.props.verificationData.verifications) {
        this.setState({
          verifications: this.props.verificationData.verifications
        })
      }
    });
  };

  renderVerifications = () => {
    const { verifications } = this.state;
    const columns = [
      {
        dataField: "username",
        text: Translations.admin.UserName,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "name",
        text: Translations.admin.Name,
        align: "left",
        headerAlign: "left",
        sort: false
      },
      {
        dataField: "status",
        text: Translations.admin.AdminStatus,
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
          value: verifications.length
        }
      ]
    };

    const defaultSorted = [
      {
        dataField: "username",
        order: "desc"
      }
    ];

    return (
      <div className="dashboard-tbl">
            <CustomBootstrapTable
              data={verifications}
              columns={columns}
              striped
              hover
              bordered={false}
              condensed
              defaultSorted={defaultSorted}
              pagination={pagination}
              noDataIndication="Table is Empty"
              id={"username"}
            />
          </div>
    )
  }

  handleSetSatetToolTipUsername = (id,username) => {   
    const { form } = this.state;
    form.id = id;
    form.username = username
    this.setState({ form });
    this.usernameHide();
  }

  renderUserNameTips = () => {
    const { form }  = this.state;
    return (
      <Username
        value={form.username}
        handleSetSatetToolTipUsername={this.handleSetSatetToolTipUsername}
        username
      />
    );
  };

  handleChangeUsername = e => {
    this.usernameHide();
    this.setState({ form: { ...this.state.form, username: e.target.value } });
    this.usernameShow();
  };

  usernameShow = () => {
    /* eslint-disable */
    ReactTooltip.show(findDOMNode(this.refs.username));
  };

  usernameHide = () => {
    /* eslint-disable */
    ReactTooltip.hide(findDOMNode(this.refs.username));
  };

  render() {
    const { verifications, form } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">
            {Translations.admin.Verification}
          </div>
          <div className="title_with_search_dropdown_button">
            <input
              type="search"
              name="username"
              id="username"
              placeholder={Translations.admin.Search_in_users}
              className="flex2"
              onChange={this.handleChangeUsername}
              value={form.username? form.username : "" }
            />
            <div
              data-for="username"
              role="button"
              data-tip="tooltip"
              ref="username"
            />
             <ToolTip
                id="username"
                getContent={this.renderUserNameTips}
                effect="solid"
                delayHide={0}
                delayShow={0}
                delayUpdate={0}
                place={"bottom"}
                border={true}
                type={"light"}
              />
            <button className="wid30per" onClick={this.handleSubmit}>
              {Translations.admin.Add}
            </button>
          </div>
          {verifications && this.renderVerifications()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  verificationData: state.verificationData
});

const mapDispatchToProps = {
  getVerifications
};

AddVerificationPage.propTypes = {
  getVerifications: PropTypes.func.isRequired,
  verificationData: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVerificationPage);


