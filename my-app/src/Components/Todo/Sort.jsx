/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Sort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy,sortValue);
    // console.log(this.state)
  };
  static getDerivedStateFromProps(nextProps){
    // console.log(nextProps)
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onClick("name", 1)}>
              <a role="button">Tên A-Z</a>
            </li>
            <li onClick={() => this.onClick("name", -1)}>
              <a role="button">Tên Z-A</a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={() => this.onClick("status", 1)}>
              <a role="button">Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={() => this.onClick("status", -1)}>
              <a role="button">Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
