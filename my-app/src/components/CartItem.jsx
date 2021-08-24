/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import * as Message from "./../Constants/Message";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  render() {
    var { item } = this.props;
    var {quantity} = item.quantity > 0 ? item : this.state
    return (
      <tr>
        <th scope="row">
          <img src={item.product.img} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty mr-2">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-info btn-rounded waves-effect waves-light"
              onClick={()=> this.onUpdateQuantity(item.product, quantity -1)}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-info btn-rounded waves-effect waves-light"
              onClick={()=> this.onUpdateQuantity(item.product, quantity +1)}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-info waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  showSubTotal = (price, quantity) => {
    var result = ''
    if(quantity > 0){
      
      result = price * quantity
    }
    return result;
  };
  onDelete = (product) => {
    this.props.onDeleteProductInCart(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };
  onUpdateQuantity = (product, quantity) =>{
    if(quantity >0 ){
      this.setState({
        quantity:quantity
      })
    }
    this.props.onUpdateQuantityInCart(product,quantity)
  }
}

export default CartItem;
