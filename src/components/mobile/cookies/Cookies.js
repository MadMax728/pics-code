import React, { Component } from "react";
import { Translations } from "../../../lib/translations";
import { Button } from "../../ui-kit";

class Cookies extends Component {
  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" id="myModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p>
                {Translations.cookies.better_user}{" "}
                <a href="/">{Translations.cookies.cookies}</a>
              </p>
              <br />
              <p>{Translations.cookies.agree}</p>
              <Button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                text={<span aria-hidden="true">&times;</span>}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cookies;
