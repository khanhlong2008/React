/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  render() {
    return (
      <div className="row mabtn">
        {/* search */}
        <Search onSearch={this.props.onSearch}/>
        {/* sort */}
        <Sort />
      </div>
    );
  }
}

export default Control;
