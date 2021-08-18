/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
              Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
