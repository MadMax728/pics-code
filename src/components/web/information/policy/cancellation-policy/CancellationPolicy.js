import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import * as routes from "../../../../../lib/constants/routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSearch } from "../../../../../actions";

class CancellationPolicy extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12">
          <div className="panel-wrapper wid100">
            <div className="content-wrapper padding-rl-23">
              <div className="title">Cancellation Policy</div>
              <p>
                This text is an example text. This text is an example text.This
                text is an example text.This text is an example text.This text
                is an example text.This text is an example text.This text is an
                example text.
              </p>
              <div className="sub-title">This text is an example</div>
              <ul className="policy-points">
                <li>
                  <div className="question">What is Picstagraph?</div>
                  <div className="answer">
                    This text is an example. This text is an example. This text
                    is an example. This text is an example. This text is an
                    example. This text is an example.This text is an example.
                  </div>
                </li>
                <li>
                  <div className="question">What is Picstagraph?</div>
                  <div className="answer">
                    This text is an example. This text is an example. This text
                    is an example. This text is an example. This text is an
                    example. This text is an example.This text is an example.
                  </div>
                </li>
                <li>
                  <div className="question">What is Picstagraph?</div>
                  <div className="answer">
                    This text is an example. This text is an example. This text
                    is an example. This text is an example. This text is an
                    example. This text is an example.This text is an example.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

CancellationPolicy.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func
};

const mapDispatchToProps = {
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CancellationPolicy);
