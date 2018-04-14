// eslint-disable-next-line
import React, { Component } from "react";
// eslint-disable-next-line
import { NavBar } from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderContent from "./components/HeaderContent";
import masterFirebaseConfig from "./firebaseConfig";
import firebase from "firebase";
import database from "firebase/database";
import BodyContent from "./components/BodyContent";
import BodyContentTwo from "./components/BodyContentTwo";

class Home extends Component {
  state = {
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: ""
  };
  componentDidMount() {
    let firebaseApp = firebase.initializeApp(masterFirebaseConfig);
    let info = firebaseApp.database().ref("bryans-story/");
    info.once("value").then(res => {
      this.setState(res.val());
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <HeaderContent />
        <BodyContent
          //renderSide{}//TODO: Setup passing image into BodyContent component
          text={[
            this.state.paragraph1,
            this.state.paragraph2,
            this.state.paragraph3,
            this.state.paragraph4
          ]}
        />
        <BodyContentTwo
          text={[
            this.state.paragraph5,
            this.state.paragraph6,
            this.state.paragraph7,
            this.state.paragraph8
          ]}
        />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
