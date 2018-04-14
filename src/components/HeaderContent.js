// eslint-disable-next-line
import React, { Component } from "react";
import image from "../images/IMG_9042.jpg";
import { CSSTransition } from "react-transition-group";

const styles = {
  backgroundImage: {
    backgroundImage: `url(${image})`
  }
};

class HeaderContent extends Component {
  state = { in: false };
  componentDidMount() {
    this.setState({ in: true });
  }
  render() {
    return (
      <div className="header-content">
        <div className="image-holder">
          <div
            className="background-image main-image"
            style={styles.backgroundImage}
          />
        </div>
        <div className="content-holder">
          <div className="actual-divider">
            <br />
          </div>
          <CSSTransition
            in={this.state.in}
            classNames="main-man"
            timeout={{ enter: 2000, exit: 500 }}
          >
            <h1 className={`main-man`}>&mdash;Bryan Fugate&rarr;</h1>
          </CSSTransition>
          <CSSTransition
            in={this.state.in}
            classNames="description-content"
            timeout={{ enter: 2000, exit: 500 }}
          >
            <p className="description-content">
              &emsp;&emsp; Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Facere incidunt labore mollitia omnis maxime aut et.
              Repudiandae veritatis, esse repellendus, distinctio perspiciatis
              dolorum quasi eum culpa officia odio temporibus beatae. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </CSSTransition>
          <CSSTransition
            in={this.state.in}
            classNames="description-content"
            timeout={{ enter: 2000, exit: 500 }}
          >
            <p className="description-content">
              &emsp;&emsp; Nesciunt ut, debitis iusto explicabo cupiditate earum
              reiciendis illum nihil aperiam quod dolorum obcaecati laudantium?
              Placeat sint quae quo numquam quis molestias.
            </p>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default HeaderContent;
