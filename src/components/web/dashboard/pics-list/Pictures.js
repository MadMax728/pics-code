import React from "react";

import { pics_list } from "../../../../mock-data";

class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {
      pics_list
    };
  }

  render() {
    const { pics_list } = this.state;

    return (
      <div className="padding-rl-10 middle-section">
        {pics_list.map((pic, index) => {
          const clearfixDiv =
            index % 2 === 0 ? <div className="clearfix" /> : null;
          return (
            <div key={index}>
              {clearfixDiv}
              <div
                className={
                  index % 2
                    ? "col-sm-6 pic-right-block"
                    : "col-sm-6 pic-left-block"
                }
              >
                <div className="pic-block">
                  <img src={pic.image} alt={pic.image} />
                  <div className="name-wrapper">
                    <div className="username">User name</div>
                    <div className="name">{pic.name}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pictures;
