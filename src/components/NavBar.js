import React, { Component } from "react";

export const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <p className="header-text">Bryan Is My Hero</p>
        <div className="right-bar">
          <a href="#">About Him</a>
          <a href="#">Donate To NAMI</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </React.Fragment>
  );
};

// export default NavBar;
