import React, { Component } from "react";
import { CustomBootstrapTable, ToolTip } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import { getAdmins, updateAdmin, getHashUser } from "../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { UsernameList } from "../../common";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";

class AddAdminPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      admins: null,
      form: {
        id: "",
        username: "",
        role: Translations.adminRole.rank1
      }
    };
  }

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  validateForm = () => {
    const { form } = this.state;
    return form.id && form.username && form.role
  }

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    if(this.validateForm()) {
      const { form, admins } = this.state;
      const data = {
        id: form.id,
        role: form.role,
        isAdmin: true
      }
      this.props.updateAdmin(data).then(()=> {
        if(this.props.adminData && this.props.adminData.admin) { 
          const dataAdd = {
            id: this.props.adminData.admin.id,
            username: this.props.adminData.admin.username,
            name: this.props.adminData.admin.name,
            role: form.role,
          };
          const indexOf = admins.findIndex(admin => {
            return admin.id === form.id;
          });
          if (indexOf === -1) {
            admins.push(dataAdd);
          } else {
            admins.splice(indexOf, 1);
            admins.push(dataAdd);
          }
          this.setState({ admins, form: { ...this.state.form , id: "", role: Translations.adminRole.rank1, username: ""}});
        }
      })
    }
  };
  
  deleteData = e => {
    const { admins } = this.state;
    const id = e.target.id;
    const data = {
      id: id,
      role: "User",
      isAdmin: false
    }
    this.props.updateAdmin(data).then(()=> {
      if(this.props.adminData && this.props.adminData.admin) { 
        const indexOf = admins.findIndex(admin => {
          return admin.id === this.props.adminData.admin.id ;
        });
        if (indexOf !== -1) {
          admins.splice(indexOf, 1);
        }
        this.setState({ admins });
      }
    });
  };

  statusFormatter = (cell, row, rowIndex) => {
    return (
      <div key={rowIndex}>
        <span>{row.role}</span>
        <span>{" "}</span>
        <button name={row.name} id={row.id} onClick={this.deleteData}>
          Delete
        </button>
      </div>
    );
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getAdmins().then(()=> {
      if(this.props.adminData && this.props.adminData.admins) {
        this.setState({
          admins: this.props.adminData.admins
        })
      }
    });
    
    this.props.getHashUser("usernames");

  };

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  renderAdmins = () => {
    const { admins } = this.state;
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
          value: admins.length
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
            data={admins}
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
    /* eslint-disable */
    ReactTooltip.show(findDOMNode(this.refs.username));
  };

  usernameHide = () => {
    /* eslint-disable */
    ReactTooltip.hide(findDOMNode(this.refs.username));
  };
  
  render() {
    const { admins, form } = this.state;

    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">
            {Translations.admin.Add_admin}
          </div>
          <div className="title_with_search_dropdown_button">
            <input
              type="search"
              name="username"
              id="username"
              placeholder={Translations.admin.Search_in_users}
              className="res440"
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
            <select
              className="res440"
              onBlur={this.handleChangeField}
              onChange={this.handleChangeField}
              name="role"
              value={form.role}
            >
              <option value={Translations.adminRole.rank1}>{Translations.adminRole.rank1}</option>
              <option value={Translations.adminRole.rank2}>{Translations.adminRole.rank2}</option>
              <option value={Translations.adminRole.rank3}>{Translations.adminRole.rank3}</option>
            </select>
            <button className="res440" onClick={this.handleSubmit}>
              {Translations.admin.Add}
            </button>
          </div>
          {admins && this.renderAdmins()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  adminData: state.adminData,
  usersList: state.hashUserData.usernames,
});

const mapDispatchToProps = {
  getAdmins,
  updateAdmin,
  getHashUser
};

AddAdminPage.propTypes = {
  getAdmins: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  adminData: PropTypes.object,
  getHashUser: PropTypes.func,
  usersList: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAdminPage);

