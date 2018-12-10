import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translations } from "../../../../lib/translations";

import * as images from "../../../../lib/constants/images";
import { dataDownload_list } from "../../../../mock-data";

class BillsAndReceiptsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDownload: dataDownload_list
    };
  }
  render() {
    const { dataDownload } = this.state;

    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="campaign-middle-section">
          <div className="bills-receipts-tbl">
            <table className="table-responsive">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>{Translations.bill_and_receipts.Ad_Campaign_title}</th>
                  <th>{Translations.bill_and_receipts.Runtime}</th>
                  <th>{Translations.bill_and_receipts.Type}</th>
                  <th>{Translations.bill_and_receipts.Expenses}</th>
                  <th>{Translations.bill_and_receipts.Status}</th>
                  <th>{Translations.bill_and_receipts.PDF}</th>
                </tr>
              </thead>
              <tbody>
                {dataDownload.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.no}</td>
                      <td>{data.title}</td>
                      <td>{data.runtime}</td>
                      <td>{data.type}</td>
                      <td>{data.expenses}</td>
                      <td>
                        <span className="green-circle" />
                      </td>
                      <td>
                        <Link to={""}>
                          <img src={images.download} alt={"download-1"} />
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

export default BillsAndReceiptsPage;
