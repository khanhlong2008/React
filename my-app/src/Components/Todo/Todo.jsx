/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Control from "./Control";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class Todo extends Component {
  render() {
    return (
      <>
        <div className="container ">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
          </div>
          <div className="row">
            <TaskForm/>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button type="button" className="btn btn-primary mabtn display">
                Thêm Công Việc
              </button>
              <Control/>
              <TaskList/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
