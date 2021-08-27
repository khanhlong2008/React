import React, { Component } from "react";
class Product extends Component {
  render() {
    var { match } = this.props;
    var name = match.params.name
    return <h3>Product : {name}</h3>
  }
}

export default Product;
