import React from "react";
import { Link } from "react-router-dom";

import * as images from "../../../lib/constants/images";

const Landing = () => {
  return (
    <div className="padding-rl-10 middle-section width-80">
      <div className="dashboard-middle-section margin-bottom-50">
        <div className="normal_title padding-15">Navigation</div>
        <div className="review-report-btns">
          <button className="filled_button pull-left">Review</button>
          <button className="filled_button pull-right">Reported content</button>
        </div>
        <div className="title_with_dropdown">
          <span>Key statistics</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <table>
            <thead>
              <tr>
                <th>Registered users</th>
                <th>Active users</th>
                <th>Deactivated accounts</th>
                <th>Turnover</th>
                <th>Reviews</th>
                <th>Reported content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="title_with_dropdown">
          <span>Content statistics</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <table>
            <thead>
              <tr>
                <th>Images</th>
                <th>Videos</th>
                <th>Campaign company</th>
                <th>Image campaign</th>
                <th>Video campaign</th>
                <th>Campaign creator</th>
                <th>Pics</th>
                <th>Ads</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>All</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>No category</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Art & Culture</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="title_with_dropdown">
          <span>Campaign statistics company</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Active campaigns</th>
                <th>Closed campaigns</th>
                <th>Campaigns temp. closed</th>
                <th>Potential turnover</th>
                <th>Total turnover</th>
                <th>Average conv. rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>All</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>No category</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Art & Culture</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="title_with_dropdown">
          <span>Ad statisitcs</span>
          <select>
            <option>Period </option>
            <option>Option 1 </option>
            <option>Option 2 </option>
          </select>
        </div>
        <div className="dashboard-tbl">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Active ads</th>
                <th>Closed ads</th>
                <th>Ads temp. closed</th>
                <th>Potential turnover</th>
                <th>Total turnover</th>
                <th>Average conv. rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>All</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>No category</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Art & Culture</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Landing;
