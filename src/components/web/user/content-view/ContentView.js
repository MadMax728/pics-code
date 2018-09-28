import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as images from "../../../../lib/constants/images";

class ContentView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Carousel showIndicators={false} showThumbs={false} showStatus={false}>
        <div>
          <img src={images.image} alt={"image1"} />
        </div>
        <div>
          <img src={images.image_1} alt={"image2"} />
        </div>
        <div>
          <img src={images.image} alt={"image3"} />
        </div>
      </Carousel>
    );
  }
}

export default ContentView;
