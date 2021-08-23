import React, { Component } from "react";
import Product from './Product'

class Products extends Component {
  render() {
    var {products} = this.props
    return (
      
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">       
            {this.showProducts(products)}
          </div>
        </section>
    );
  }
  showProducts(products){
    var result = null;
    if(products.length >0 ){
      result = products.map((product, index)=>{
        return <Product key={index} product={product}/>
      })
    }
    return result
  }
}
const mapstateToProps = state =>{
  return{
    products : state.products
  };
}
export default Products;
