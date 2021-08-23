import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";
import {actAddToCart} from './../Actions/index'
class ProductContainer extends Component {
  render() {
    var { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
  showProducts(products) {
    var result = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product 
        key={index} 
        product={product} 
        onAddToCart={onAddToCart}
        />;
      });
    }
    return result;
  }
}
// kiem tra kieu du lieu cua props
ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired, // isRequired: bat buoc phai co
};
// lay states tu store keo ve de nhan props
const mapstateToProps = (state) => {
  return {
    products: state.products,
  };
};
// despatch 1 cai action chuyen thanh props de component con nhan
const mapDispatchToProps = (dispatch,props) => {
  return {
    onAddToCart:(product)=>{
      dispatch(actAddToCart(product,1))
    }
  }
};
export default connect(mapstateToProps, mapDispatchToProps)(ProductContainer);
