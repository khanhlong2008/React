import React, { Component } from "react";
import { connect } from 'react-redux'
import Products from "../components/Products";
class ProductContainer extends Component {
  render() {
      var {products} = this.props
    return (
      
        <Products products={products}/>
    );
  }
}
const mapstateToProps = state =>{
  return{
    products : state.products
  };
}
export default connect(mapstateToProps,null) (ProductContainer);
