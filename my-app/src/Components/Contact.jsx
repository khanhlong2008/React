import React, { Component } from "react";
import { Prompt } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  onClick = (isChecked)=>{
      this.setState({
          isChecked: isChecked
      })
  }
  render() {
    var { isChecked } = this.state;
    return (
      <h1>
        Contact
        <br />
        <button type="button" className="btn btn-info" onClick={()=> this.onClick(false)}>
          cho phép
        </button>
        <br></br>
        <button type="button" class="btn btn-danger" onClick={()=> this.onClick(true)}>
          không cho phép
        </button>
        <Prompt
          when={isChecked}
          message={(location) => `Bạn chắc chắn đi đến ${location.pathname}`}
        />
      </h1>
    );
  }
}

export default Contact;
