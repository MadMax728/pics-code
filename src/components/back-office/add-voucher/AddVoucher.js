import React, { Component } from "react";
import { Link } from "react-router-dom";
import { voucher_list } from "../../../mock-data";

class AddVoucher extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      vouchers: voucher_list
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { vouchers } = this.state;

    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">Add voucher code</div>
          <div className="dashboard-tbl">
            <table>
              <thead>
                <tr>
                  <th className="blur no-padding">
                    <input
                      type="text"
                      htmlFor="Voucher Code"
                      className="res320"
                      placeholder="Voucher code"
                    />
                  </th>
                  <th className="no-padding">
                    <select name="" id="" className="res320">
                      <option value="">Period</option>
                      <option value="">Item1</option>
                      <option value="">Item2</option>
                    </select>
                  </th>
                  <th className="no-padding">
                    <select name="" id="" className="res320">
                      <option value="">Amount</option>
                      <option value="">Item1</option>
                      <option value="">Item2</option>
                    </select>
                  </th>
                  <th className="no-padding">
                    <select name="" id="" className="res320">
                      <option value="">Type</option>
                      <option value="">Item1</option>
                      <option value="">Item2</option>
                    </select>
                  </th>
                  <th className="no-padding">
                    <select name="" id="" className="res320">
                      <option value="">Number</option>
                      <option value="">Item1</option>
                      <option value="">Item2</option>
                    </select>
                  </th>
                  <th className="wid93 no-padding res440 res320">
                    <Link to={""}>Add</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {vouchers.map((voucher, index) => {
                  return (
                    <tr key={index}>
                      <td>{voucher.code}</td>
                      <td>{voucher.period}</td>
                      <td>{voucher.amount}</td>
                      <td>{voucher.type}</td>
                      <td>{voucher.number}</td>
                      <td className="wid93 res440 res320">
                        <Link to={""} className="active link-black">
                          Active
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVoucher;
