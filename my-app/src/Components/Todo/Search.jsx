/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyWord:'',
    }
  }
  onChange = (e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  }
  onSearch = ()=>{
    // console.log(this.state)
    this.props.onSearch(this.state.keyWord)
  }
  render() {
    const {keyWord} = this.state.keyWord
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            name="keyWord"
            value={keyWord}
            onChange={this.onChange}
          />
          <span className="input-group-btn">
            <button 
            className="btn btn-primary" 
            type="button"
            onClick={this.onSearch}
            >
              Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
