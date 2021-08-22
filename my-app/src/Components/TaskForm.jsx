/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  componentDidMount() {
    if (this.props.tasksEditing) {
      this.setState({
        id: this.props.tasksEditing.id,
        name: this.props.tasksEditing.name,
        status: this.props.tasksEditing.status,
      });
    }
  }
  // static getDerivedStateFromProps(nextProps,) {
  //   if (nextProps && nextProps.tasksEditing) {
  //     return {
  //       id: nextProps.tasksEditing.id,
  //       name: nextProps.tasksEditing.name,
  //       status: nextProps.tasksEditing.status,
  //     };
  //   }
  //   return null;
  // }
  // componentDidUpdate(nextProps,prevState) {
  //   if (prevState.tasksEditing !== nextProps.tasksEditing) {
  //     this.setState({
  //       id: nextProps.tasksEditing.id,
  //       name: nextProps.tasksEditing.name,
  //       status: nextProps.tasksEditing.status,
  //     });
  //   }
  // }
  oncloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.props.onAddTask(this.state)
    this.props
    this.onClear();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    const { id } = this.state;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <h3 className="panel-title">
                {id !== "" ? "Cập Nhật Công Việc" : "Thêm Công Việc"}
              </h3>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <span
                className="far fa-window-close"
                onClick={this.oncloseForm}
              ></span>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Lưu Lại
              </button>
              &nbsp;
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {

  }
};
const mapDispatchToProps =  (dispatch,props)=>{
  return {
    onAddTask : (task) =>{
      dispatch(actions.addTask(task));
    },
    onCloseForm: ()=>{
      dispatch(actions.closeForm())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
