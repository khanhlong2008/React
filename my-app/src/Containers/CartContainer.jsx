/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import * as Message from "./../Constants/Message";
import CartItem from "./../components/CartItem";
import CartResult from "../components/CartResult";
import {
  actDeleteProductInCart,
  actchangeMessage,
  actUpdateQuantityInCart,
} from "./../Actions/index";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    // console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showToralAmout(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    var { onDeleteProductInCart, onChangeMessage ,onUpdateQuantityInCart} = this.props;
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateQuantityInCart={onUpdateQuantityInCart}
          />
        );
      });
    }
    return result;
  };
  showToralAmout = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}
// kiem tra kieu du lieu cua props
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired, // isRequired: bat buoc phai co
};
// lay states tu store keo ve de nhan props
const mapstateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispacthToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actchangeMessage(message));
    },
    onUpdateQuantityInCart: (product, quantity) => {
      dispatch(actUpdateQuantityInCart(product, quantity));
    },
  };
};
export default connect(mapstateToProps, mapDispacthToProps)(CartContainer);
