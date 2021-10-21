import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    let dieFace = `Die fas fa-dice-${this.props.face} ${
      this.props.rolling ? "Die-rolling" : ""
    }`;
    return <i className={dieFace}></i>;
  }
}

export default Die;
