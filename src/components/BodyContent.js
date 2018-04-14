import React, { Component } from "react";

class BodyContent extends Component {
  state = { info: this.props.text };
  // styles = {
  //   backgroundImage: {
  //     backgroundImage: `url(${this.props.image})` //TODO: Setup passing image into BodyContent component
  //   }
  // };

  render() {
    const side = this.state.renderSide;
    return (
      <div className="body-content">
        <div className="split-right text-holder">
          <h3>{this.props.text[0].info}</h3>
          {/* <br /> */}
          <h3>{this.props.text[1].info}</h3>
          {/* <br /> */}
          <h3>{this.props.text[2].info}</h3>
          {/* <br /> */}
          <h3>{this.props.text[3].info}</h3>
        </div>
        <div className="split-left image-holder">
          <div className="body-content-two-image" />
        </div>
      </div>
    );
  }
}

export default BodyContent;
