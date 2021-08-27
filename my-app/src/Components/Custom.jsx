import React, { Component } from "react";
import "./burger.css";
import Message from "./Message";
import Result from "./Result";
class Custom extends Component {
  render() {
    var { custom, burger } = this.props;
    return (
      <div className="custom">
        <Message />
        <div className="customItem">
          <div className="item item1 font">TOPPING</div>
          <div className="item item2 font">OPTION</div>
          <div className="item item3 font">UNIT PRICE</div>
          <div className="item item4 font">PRICE</div>
          <div className="border1"></div>
          <div className="item item5 font">Salad</div>
          <div className="item item6 font-size">
            <div className="row">
              <input
                type="button"
                value="+"
                className="btn1 btn-info col"
                onClick={() => this.onUpdateQuantity("+", "salad")}
              />
              <p className="mg-3">{burger.salad}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() => this.onUpdateQuantity("-", "salad")}
              />
            </div>
          </div>
          <div className="item item7 font-size">{custom.priceSalad}$</div>
          <div className="item item8 font-size">$</div>
          <div className="item item9 font">Cheese</div>
          <div className="item item10 font-size">
            <div className="row">
              <input type="button" value="+" className="btn1 btn-info col" />
              <p className="mg-3">{burger.cheese}</p>
              <input type="button" value="-" className="btn1 btn-info col" />
            </div>
          </div>
          <div className="item item11 font-size">{custom.priceCheese}$</div>
          <div className="item item12 font-size">$</div>
          <div className="item item13 font">Meat</div>
          <div className="item item14 font-size">
            <div className="row">
              <input type="button" value="+" className="btn1 btn-info col" />
              <p className="mg-3">{burger.meat}</p>
              <input type="button" value="-" className="btn1 btn-info col" />
            </div>
          </div>
          <div className="item item15 font-size">{custom.priceMeat}$</div>
          <div className="item item16 font-size">$</div>
          <div className="item item17 font">Bacon</div>
          <div className="item item18 font-size">
            <div className="row">
              <input type="button" value="+" className="btn1 btn-info col" />
              <p className="mg-3">{burger.bacon}</p>
              <input type="button" value="-" className="btn1 btn-info col" />
            </div>
          </div>
          <div className="item item19 font-size">{custom.priceBacon}$</div>
          <div className="item item20 font-size">$</div>
          <div className="border2"></div>
          <Result />
        </div>
      </div>
    );
  }
 
  onPlusMinusTopping = () => {
    // this.props.onUpdateQuantity(burger);
   
  };
  // onPlusMinusTopping = (action, topping) => {
  //   var {buger} = this.props;
  //   let { salad, cheese, meat, bacon } = buger;
  //   let stateTopping;
  //   switch (topping) {
  //     case "salad": {
  //       stateTopping = salad;
  //       break;
  //     }
  //     case "cheese": {
  //       stateTopping = cheese;
  //       break;
  //     }
  //     case "meat": {
  //       stateTopping = meat;
  //       break;
  //     }
  //     case "bacon": {
  //       stateTopping = bacon;
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  //   if (action === "+") {
  //     stateTopping = stateTopping + 1;
  //   } else {
  //     stateTopping = stateTopping - 1;
  //   }
  //   this.setState({
  //     [topping]: stateTopping >= 0 ? stateTopping : 0,
  //   });
  // };
}

export default Custom;
