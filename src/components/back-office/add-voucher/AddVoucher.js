import React, { Component } from "react";
import { Link } from "react-router-dom";
import { voucher_list } from "../../../mock-data";
import { CustomBootstrapTable } from "../../ui-kit";

class AddVoucher extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      vouchers: voucher_list
    };
  }

  statusFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        <span className="green-circle" /> Active{" "}
      </div>
    );
  };

  codeFormatter = (column, colIndex) => {
    return (
      <input
        type="text"
        htmlFor="Voucher Code"
        className="res320"
        placeholder="Voucher code"
      />
    );
  };

  periodFormatter = (column, colIndex) => {
    return (
      <select name="" id="" className="res320">
        <option value="">Period</option>
        <option value="">Item1</option>
        <option value="">Item2</option>
      </select>
    );
  };

  amountFormatter = (column, colIndex) => {
    return (
      <select name="" id="" className="res320">
        <option value="">amount</option>
        <option value="">Item1</option>
        <option value="">Item2</option>
      </select>
    );
  };

  typeFormatter = (column, colIndex) => {
    return (
      <select name="" id="" className="res320">
        <option value="">type</option>
        <option value="">Item1</option>
        <option value="">Item2</option>
      </select>
    );
  };

  numberFormatter = (column, colIndex) => {
    return (
      <select name="" id="" className="res320">
        <option value="">Number</option>
        <option value="">Item1</option>
        <option value="">Item2</option>
      </select>
    );
  };

  addFormatter = (column, colIndex) => {
    return <Link to={""}>Add</Link>;
  };

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { vouchers } = this.state;
    const columns = [
      {
        dataField: "code",
        text: "Code",
        headerFormatter: this.codeFormatter
      },
      {
        dataField: "period",
        text: "Period",
        headerFormatter: this.periodFormatter
      },
      {
        dataField: "amount",
        text: "Amount",
        headerFormatter: this.amountFormatter
      },
      {
        dataField: "type",
        text: "Type",
        headerFormatter: this.typeFormatter
      },
      {
        dataField: "number",
        text: "Number",
        headerFormatter: this.numberFormatter
      },
      {
        dataField: "status",
        text: "Status",
        headerFormatter: this.addFormatter,
        headerClasses: "wid93 no-padding res440 res320",
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
          value: vouchers.length
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
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">Add voucher code</div>
          <div className="dashboard-tbl">
            <CustomBootstrapTable
              data={vouchers}
              columns={columns}
              striped
              hover
              bordered={false}
              condensed
              defaultSorted={defaultSorted}
              pagination={pagination}
              noDataIndication="Table is Empty"
              id={"code"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddVoucher;
