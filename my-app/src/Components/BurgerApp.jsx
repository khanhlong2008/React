import React, { Component } from "react";
import BurgerContainer from "../Containers/BurgerContainer";
import CustomContainer from "../Containers/CustomContainer";

class BurgerApp extends Component {
  render() {
    return (
      <div className=" display">
        <BurgerContainer/>
        <CustomContainer />
      </div>
    );
  }
}

export default BurgerApp;
