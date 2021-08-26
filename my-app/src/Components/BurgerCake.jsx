import React, { Component } from "react";

class BurgerCake extends Component {
  render() {
    return (
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
    );
  }
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
}

export default BurgerCake;
