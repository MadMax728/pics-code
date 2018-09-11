import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as images from "../../../../../lib/constants/images";

class BillsAndReceipts extends Component {
  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="campaign-middle-section">
          <div className="bills-receipts-tbl">
            <table className="table-responsive">
              <thead>
                <tr>
                  <th>Nr.</th>
                  <th>Ad / Campaign title</th>
                  <th>Runtime</th>
                  <th>Type</th>
                  <th>Expenses</th>
                  <th>Status</th>
                  <th>PDF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2.</td>
                  <td>Ad / Campaign title</td>
                  <td>10 days</td>
                  <td>Ad / Campaign title</td>
                  <td>50,00 E</td>
                  <td>
                    <span className="green-circle" />
                  </td>
                  <td>
                    <Link to={""}>
                      <img src={images.download} alt={"download-1"} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Ad / Campaign title</td>
                  <td>10 days</td>
                  <td>Ad / Campaign title</td>
                  <td>50,00 E</td>
                  <td>
                    <span className="green-circle" />
                  </td>
                  <td>
                    <Link to={""}>
                      <img src={images.download} alt={"download-2"} />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BillsAndReceipts;
