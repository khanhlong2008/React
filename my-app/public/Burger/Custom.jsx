/* eslint-disable no-useless-constructor */

import { Component } from "react";
import "./../Burger/burger.css";
class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceSalad: 10,
      priceCheese: 20,
      priceMeat: 25,
      priceBacon: 28,
    };
  }
  render() {
    const { onPlusMinusTopping, onReset,onOrder } = this.props;
    const { salad, cheese, bacon, meat ,hastag} = this.props.Custom;
    const { priceBacon, priceCheese, priceMeat, priceSalad } = this.state;
    return (
      <div className="custom">
        <h1>{hastag}</h1>
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
                onClick={() => onPlusMinusTopping("more", "salad")}
              />
              <p className="col">{salad}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() => onPlusMinusTopping("less", "salad")}
              />
            </div>
          </div>
          <div className="item item7 font-size">{priceSalad}$</div>
          <div className="item item8 font-size">{priceSalad * salad}$</div>
          <div className="item item9 font">Cheese</div>
          <div className="item item10 font-size">
            <div className="row">
              <input
                type="button"
                value="+"
                className="btn1 btn-info col"
                onClick={() => onPlusMinusTopping("more", "cheese")}
              />
              <p className="col">{cheese}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() => onPlusMinusTopping("less", "cheese")}
              />
            </div>
          </div>
          <div className="item item11 font-size">{priceCheese}$</div>
          <div className="item item12 font-size">{priceCheese * cheese}$</div>
          <div className="item item13 font">Meat</div>
          <div className="item item14 font-size">
            <div className="row">
              <input
                type="button"
                value="+"
                className="btn1 btn-info col"
                onClick={() => onPlusMinusTopping("more", "meat")}
              />
              <p className="col">{meat}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() => onPlusMinusTopping("less", "meat")}
              />
            </div>
          </div>
          <div className="item item15 font-size">{priceMeat}$</div>
          <div className="item item16 font-size">{priceMeat * meat}$</div>
          <div className="item item17 font">Bacon</div>
          <div className="item item18 font-size">
            <div className="row">
              <input
                type="button"
                value="+"
                className="btn1 btn-info col"
                onClick={() => onPlusMinusTopping("more", "bacon")}
              />
              <p className="col">{bacon}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() => onPlusMinusTopping("less", "bacon")}
              />
            </div>
          </div>
          <div className="item item19 font-size">{priceBacon}$</div>
          <div className="item item20 font-size">{priceBacon * bacon}$</div>
          <div className="border2"></div>
          <div className="item item21 font">TOTAL COST :</div>
          <div className="item item22 font-size">
            {priceSalad * salad +
              priceCheese * cheese +
              priceMeat * meat +
              priceBacon * bacon}
            $
          </div>
          <div className="item  item23">
          <button
              type="button"
              className="btn2 btn-info  font-size2 center"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => onOrder()}
            >
              OPEN NOW
            </button>
          </div>
          <div className="item  item24">
            <button
              className="btn2 btn-info  font-size2 center"
              onClick={() => onReset()}
            >
              RESET
            </button>
          </div>
         
        </div>
      </div>
    );
  }
  
}
export default Custom;
