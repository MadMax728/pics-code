import React, { Component } from "react";
import { CustomBootstrapTable, CustomeTableLoader } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import { getVouchers, addVoucher } from "../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SelectPeriod, SelectAmount, SelectType, SelectNumber } from "../../common";

class AddVoucherPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      voucherList: null,
      form: {
        id: "",
        voucher_code: "",
        period: "",
        amount: "",
        type: "",
        number: ""
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
    return form.voucher_code && form.period && form.amount && form.type && form.number
  }

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    if(this.validateForm()) {
      const { form, voucherList } = this.state;
      const data = {
        title: form.voucher_code,
        voucherCode: form.voucher_code,
        periodId: form.period,
        typeId: form.type,
        amountId: form.amount,
        numberId: form.number
      }
      
      this.props.addVoucher(data).then(()=> {
        if(this.props.voucherData && this.props.voucherData.voucher) { 
          const dataAdd = this.props.voucherData.voucher;           
          const indexOf = voucherList.findIndex(voucher => {
            return voucher.id === form.id;
          });
          if (indexOf === -1) {
            voucherList.push(dataAdd);
          } else {
            voucherList.splice(indexOf, 1);
            voucherList.push(dataAdd);
          }
          this.setState({ voucherList, form: { ...this.state.form , id: "", voucher_code: "", period: "", type: "", amount: "", number: ""}});
        }
      })
    }
  };

  handleSelect = (isFor , selected) => {
    const { form } = this.state;
    form[isFor] = selected;
    this.setState({ form });
  }


  statusFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        <span className={row.isActive? "green-circle" : "red-circle"} /> Active{" "}
      </div>
    );
  };

  periodFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        {row.periodList && row.periodList.voucherPeriod}
      </div>
    );
  };

  amountFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        {row.amountList && row.amountList.voucherAmount}
      </div>
    );
  };

  numberFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        {row.numberList && row.numberList.voucherNumber}
      </div>
    );
  };

  typeFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div key={rowIndex}>
        {row.typeList && row.typeList.voucherType}
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
        name="voucher_code"
        onChange={this.handleChangeField}
      />
    );
  };

  periodHeaderFormatter = (column, colIndex) => {
    const { form } = this.state;
    return (
      <SelectPeriod
        value={form.period? form.period : ""}
        className="res320"
        handleSelect={this.handleSelect}
      />
    );
  };

  amountHeaderFormatter = (column, colIndex) => {
    const { form } = this.state;
    return (
      <SelectAmount
        value={form.amount? form.amount : ""}
        className="res320"
        handleSelect={this.handleSelect}
      />
    );
  };

  typeHeaderFormatter = (column, colIndex) => {
    const { form } = this.state;
    return (
      <SelectType
        value={form.type? form.type : ""}
        className="res320"
        handleSelect={this.handleSelect}
      />
    );
  };

  numberHeaderFormatter = (column, colIndex) => {
    const { form } = this.state;
    return (
      <SelectNumber
        value={form.number? form.number : ""}
        className="res320"
        handleSelect={this.handleSelect}
      />
    );
  };

  addFormatter = (column, colIndex) => {
    return (
      <button onClick={this.handleSubmit}>{Translations.admin.Add}</button>
    );
  };

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getVouchers().then(()=> {
      if(this.props.voucherData && this.props.voucherData.vouchers) {
        this.setState({
          voucherList: this.props.voucherData.vouchers
        })
      }
    });
  };

  renderVouchers = () => {
    const { voucherList } = this.state;
    const columns = [
      {
        dataField: "voucherCode",
        text: Translations.admin.code,
        headerFormatter: this.codeFormatter
      },
      {
        dataField: "voucherPeriod",
        text: Translations.admin.period,
        headerFormatter: this.periodHeaderFormatter,
        formatter: this.periodFormatter
      },
      {
        dataField: "voucherAmount",
        text: Translations.admin.amount,
        headerFormatter: this.amountHeaderFormatter,
        formatter: this.amountFormatter
      },
      {
        dataField: "voucherType",
        text: Translations.admin.type,
        headerFormatter: this.typeHeaderFormatter,
        formatter: this.typeFormatter
      },
      {
        dataField: "voucherNumber",
        text: Translations.admin.number,
        headerFormatter: this.numberHeaderFormatter,
        formatter: this.numberFormatter
      },
      {
        dataField: "status",
        text: Translations.admin.status,
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
          value: voucherList.length
        }
      ]
    };

    const defaultSorted = [
      {
        dataField: "voucherCode",
        order: "desc"
      }
    ];

    return (
      <div className="dashboard-tbl voucher-table">
            <CustomBootstrapTable
              data={voucherList}
              columns={columns}
              striped
              hover
              bordered={false}
              condensed
              defaultSorted={defaultSorted}
              pagination={pagination}
              noDataIndication="Table is Empty"
              id={"voucherCode"}
            />
          </div>
    )
  }

  render() {
    const { voucherList } = this.state;
    const { voucherData } = this.props;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">
            {Translations.admin.Add_voucher_code}
          </div>
          {voucherList && this.renderVouchers()}
          {voucherData.isLoading && <CustomeTableLoader />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  voucherData: state.voucherData
});

const mapDispatchToProps = {
  getVouchers,
  addVoucher
};

AddVoucherPage.propTypes = {
  getVouchers: PropTypes.func.isRequired,
  addVoucher: PropTypes.func.isRequired,
  voucherData: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVoucherPage);
