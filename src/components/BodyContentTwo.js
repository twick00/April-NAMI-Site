import React, { Component } from "react";
import image from "../images/IMG_9365.jpg";

const styles = {
  backgroundImage: {
    backgroundImage: `url(${image})`
  }
};

class BodyContentTwo extends Component {
  state = { info: this.props.text };

  render() {
    const side = this.state.renderSide;
    return (
      <div className="body-content">
        <div className="split-left image-holder">
          <div className="background-image">
            <div
              className="background-image body-content-two-image"
              style={styles.backgroundImage}
            />
          </div>
        </div>
        <div className="split-right text-holder">
          <h3>{this.props.text[0].info}</h3>
          {/* <br /> */}
          <h3>{this.props.text[1].info}</h3>
          {/* <br /> */}
          <h3>{this.props.text[2].info}</h3>
          {/* <br /> */}
          <h3>{this.props.text[3].info}</h3>
        </div>
      </div>
    );
  }
}

export default BodyContentTwo;
