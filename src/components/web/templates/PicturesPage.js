import React from "react";
import PictureCard from "../../web/misc/PictureCard";
import { pics_list } from "../../../mock-data";

class PicturesRoot extends React.Component {
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
              <PictureCard item={pic} index={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PicturesRoot;
