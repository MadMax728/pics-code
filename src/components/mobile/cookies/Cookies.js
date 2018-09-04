import React, { Component } from "react";

class Cookies extends Component {
  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" id="myModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p>
                For a better user experience we can use <a href="/">Cookies</a>
              </p>
              <br />
              <p>By using picstagraph you do agree</p>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cookies;
