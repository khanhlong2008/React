import React, { Component } from "react";
import { NavLink ,Route} from "react-router-dom";
import Product from './Product'
class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: "iphone",
        name: "iphone ",
        price: 10000000,
      },
      {
        id: 2,
        slug: "samsung ",
        name: "samsung ",
        price: 8000000,
      },
      {
        id: 3,
        slug: "oppo ",
        name: "oppo ",
        price: 7000000,
      },
    ];
    var { match } = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });
    return (
      <div className="container">
        <h1>Product</h1>
        <div className="row">
          <ul className="list-group">{result}</ul>
        </div>
        <div className="row">
          <Route path="/products/:name" component={Product}/>
        </div>
      </div>
    );
  }
}

export default Products;
