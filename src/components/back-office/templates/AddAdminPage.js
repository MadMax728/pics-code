import React, { Component } from "react";
import { CustomBootstrapTable } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import { getAdmins } from "../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddAdminPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      admins: null,
      form: {
        username: "",
        status: "admin_status1"
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
    e.preventDefault();
    const adminData = this.state.admins;
    const data = {
      no: 4,
      username: this.state.form.username,
      name: "test",
      status: this.state.form.status
    };
    adminData.push(data);
    this.setState({
      admins: adminData
    });
  };
  
  deleteData = e => {
    const admins_Data = this.state.admins;
    for (let i = admins_Data.length - 1; i >= 0; i--) {
      if (admins_Data[i].name === e.target.name) {
        admins_Data.splice(i, 1);
      }
    }
    this.setState({
      admins: admins_Data
    });
  };

  statusFormatter = (cell, row, rowIndex) => {
    return (
      <div key={rowIndex}>
        <span>{cell}</span>
        <button name={row.name} onClick={this.deleteData}>
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

  render() {
    const { admins } = this.state;

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
              onChange={this.handleChangeField}
            />
            <select
              className="res440"
              onBlur={this.handleChangeField}
              name="status"
            >
              <option value={"admin_status1"}>Admin status 1 </option>
              <option value={"admin_status2"}>Admin status 2 </option>
              <option value={"admin_status3"}>Admin status 3 </option>
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
  adminData: state.adminData
});

const mapDispatchToProps = {
  getAdmins
};

AddAdminPage.propTypes = {
  getAdmins: PropTypes.func.isRequired,
  adminData: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAdminPage);

