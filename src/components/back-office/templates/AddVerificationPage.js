import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import { getVerifications, getUnverifiedUsers, updateVerification } from "../../../actions";

import { CustomBootstrapTable, ToolTip, CustomeTableLoader } from "../../ui-kit";
import { UsernameList } from "../../common";

import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";


class AddVerificationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.username = React.createRef();
    this.state = {
      verifications: null,
      searchKeyword: this.props.searchData.searchKeyword,      
      form: {
        id: "",
        username: ""
      }
    };
  }

  render() {
    const { verifications, form } = this.state;
    const { verificationData } = this.props;
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
              ref={username => this.username = username}
            />
             <ToolTip
                id="username"
                getContent={this.renderUserNameTips}
                effect="solid"
                delayHide={0}
                delayShow={0}
                delayUpdate={0}
                place={"bottom"}
                border
                type={"light"}
              />
            <button className="wid30per" onClick={this.handleSubmit}>
              {Translations.admin.Add}
            </button>
          </div>
          {verifications && this.renderVerifications()}
          {verificationData.isLoading && <CustomeTableLoader />}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getVerifications().then(()=> {
      if(this.props.verificationData && this.props.verificationData.verifications) {
        this.setState({
          verifications: this.props.verificationData.verifications
        })
      }
    });
    this.props.getUnverifiedUsers();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchData.searchKeyword !== prevState.searchKeyword) {
      nextProps.history.push(
        routes.ROOT_ROUTE + "?search=" + nextProps.searchData.searchKeyword
      );
    }
    return null;
  }

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  validateForm = () => {
    const { form } = this.state;
    return form.id && form.username
  }

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();

    if(this.validateForm()) {
      const { form, verifications } = this.state;
      const data = {
        userId: form.id,
        isVerifiedUser: true
      }
      this.props.updateVerification(data).then(()=> {
        if(this.props.verificationData && this.props.verificationData.verification) { 
          const dataAdd = {
            id: this.props.verificationData.verification.id,
            username: this.props.verificationData.verification.username,
            name: this.props.verificationData.verification.name,
          };
          const indexOf = verifications.findIndex(verification => {
            return verification.id === form.id;
          });
          if (indexOf === -1) {
            verifications.push(dataAdd);
          } else {
            verifications.splice(indexOf, 1);
            verifications.push(dataAdd);
          }
          this.setState({ verifications, form: { ...this.state.form , id: "", username: ""}});
        }
      })
    }
  };

  removeVerification = e => {
    const { verifications } = this.state;
    const id = e.target.id;
    const data = {
      userId: id,
      isVerifiedUser: false
    }
    this.props.updateVerification(data).then(()=> {
      if(this.props.verificationData && this.props.verificationData.verification) { 
        const indexOf = verifications.findIndex(verification => {
          return verification.id === this.props.verificationData.verification.id ;
        });
        if (indexOf !== -1) {
          verifications.splice(indexOf, 1);
        }
        this.setState({ verifications });
      }
    });
  };

  statusFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        <button name={row.name} id={row.id} onClick={this.removeVerification}>
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
    const { usersList } = this.props;
    return (
      <UsernameList
        value={form.username}
        handleSetSatetToolTipUsername={this.handleSetSatetToolTipUsername}
        username
        usersList={usersList}
      />
    );
  };

  handleChangeUsername = e => {
    this.usernameHide();
    this.setState({ form: { ...this.state.form, username: e.target.value } });
    this.usernameShow();
  };

  usernameShow = () => {
    ReactTooltip.show(this.username);
  };

  usernameHide = () => {
    ReactTooltip.hide(this.username);
  };
}

const mapStateToProps = state => ({
  verificationData: state.verificationData,
  usersList: state.verificationData.unverifiedUsers,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getVerifications,
  getUnverifiedUsers,
  updateVerification
};

AddVerificationPage.propTypes = {
  getVerifications: PropTypes.func.isRequired,
  verificationData: PropTypes.object,
  getUnverifiedUsers: PropTypes.func,
  updateVerification: PropTypes.func,
  usersList: PropTypes.any,
  searchData: PropTypes.any,
  history: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVerificationPage);


