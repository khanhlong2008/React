import React, { Component } from "react";
import Button from "../Button/Button";

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>samsung</td>
        <td>500</td>
        <td>
          <span className="label label-warning">Còn Hàng</span>
        </td>
        <td>
          <Button label="Sữa" color="success" type="button"/>
          <Button label="Sữa" color="danger" type="button"/>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
