/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Control from "./Control";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }
  generateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Đi bơi",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Ngủ",
        status: true,
      },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  //tao id
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }
  onToggleForm = ()=>{
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    })
  }
  oncloseForm = () =>{
    this.setState({
      isDisplayForm : false
    })
  }
  render() {
    var { tasks, isDisplayForm } = this.state;
    var eleTaskForm = isDisplayForm ? <TaskForm oncloseForm={this.oncloseForm}/> : "";
    return (
      <>
        <div className="container ">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            <div
              className={
                isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
              }
            >
              {eleTaskForm}
            </div>
            <div
              className={
                isDisplayForm
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button
                    type="button"
                    className="btn btn-primary mabtn display"
                    onClick={this.onToggleForm}
                  >
                    Thêm Công Việc
                  </button>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button
                    type="button"
                    className="btn btn-danger mabtn display"
                    onClick={this.generateData}
                  >
                    Generate Data
                  </button>
                </div>
              </div>
              <Control />
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
