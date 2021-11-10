import React, { Component } from "react";
import { getProfileUser } from "../controller/ContollerUser.js";
import { getToken } from "../util.js";
import { getAll } from "../controller/ContollerDay";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

class TheLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Token = getToken();
    if (!Token) {
      this.props.history.push("/login");
    } else {
      const data = getAll();
      sessionStorage.setItem("schedule", JSON.stringify(data));
    }

    return (
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    );
  }
}

export default TheLayout;
