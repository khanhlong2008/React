/* eslint-disable react/no-direct-mutation-state */
import { Component } from "react";
import "./../Burger/burger.css";
import Custom from "./Custom";
class LDMajor extends Component {
  state = {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
    hastag: "CUSTOM YOUR BURGER",
  };

  onPlusMinusTopping = (action, topping) => {
    let { salad, cheese, meat, bacon } = this.state;
    let stateTopping;
    switch (topping) {
      case "salad": {
        stateTopping = salad;
        break;
      }
      case "cheese": {
        stateTopping = cheese;
        break;
      }
      case "meat": {
        stateTopping = meat;
        break;
      }
      case "bacon": {
        stateTopping = bacon;
        break;
      }
      default:
        break;
    }
    if (action === "more") {
      stateTopping = stateTopping + 1;
    } else {
      stateTopping = stateTopping - 1;
    }
    this.setState({
      [topping]: stateTopping >= 0 ? stateTopping : 0,
    });
  };
  burgerContent = () => {
    let { salad, cheese, meat, bacon } = this.state;
    let burger = [];
    for (let i = 0; i < salad; i++) {
      burger.push(<div key={burger.length} className="salad"></div>);
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheese"></div>);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meat"></div>);
    }
    for (let i = 0; i < bacon; i++) {
      burger.push(<div key={burger.length} className="bacon"></div>);
    }
    if (burger.length === 0)
      burger.push(<h1 key="0">Please start adding topping</h1>);
    return burger;
  };
  onReset = () => {
    this.setState({
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
      hastag: "CUSTOM YOUR BURGER",
    });
  };
  onOrder = () => {
    const { salad, cheese, meat, bacon } = this.state;
    if (salad === 0 && cheese === 0 && meat === 0 && bacon === 0) {
      this.setState({
        hastag: "PLEASE CHOOSE A TOPPING",
      });
    } else {
      this.setState({
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
        hastag: "PAYMENT SUCCESS",
      });
    }
  };

  render() {
    return (
      <div className=" display">
        <div>
          <div className="box">
            {/* <!-- Phần bánh burger phía trên --> */}
            <div className="bread-top">
              <div className="seeds"></div>
              <div className="seeds2"></div>
            </div>

            {this.burgerContent()}
            {/* <!-- Phần bánh burger phía dươi --> */}
            <div className="bread-bottom"></div>
          </div>
        </div>
        <Custom
          onOrder={this.onOrder}
          Custom={this.state}
          onPlusMinusTopping={this.onPlusMinusTopping}
          onReset={this.onReset}
        />
      </div>
    );
  }
}
export default LDMajor;
