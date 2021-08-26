import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <>
        <div className="item item21 font">TOTAL COST :</div>
        <div className="item item22 font-size">$</div>
        <div className="item  item23">
          <button
            type="button"
            className="btn2 btn-info  font-size2 center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            OPEN NOW
          </button>
        </div>
        <div className="item  item24">
          <button className="btn2 btn-info  font-size2 center">RESET</button>
        </div>
      </>
    );
  }
}

export default Result;
