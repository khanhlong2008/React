/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Control from "./Control";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyWord: "",
      sortBy: "",
      sortValue: 1,
    };
  }
  onOpenForm = () => {
    this.props.onToggleForm()
  };
  oncloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onShowUpdateForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  onUpdateStatus = (id) => {
    var  tasks  = this.state.tasks;
    var index = tasks.findIndex(task=> task.id === id)
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  // findIndex = (id) => {    
  //   var result = -1;
  //   tasks.forEach((tasks, index) => {
  //     if (tasks.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.oncloseForm();
    console.log(tasks);
  };
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var tasksEditing = tasks[index];
    this.setState({
      tasksEditing: tasksEditing,
    });
    this.onShowUpdateForm();
  };
  onSearch = (keywork) => {
    this.setState({
      keyWord: keywork,
    });
  };
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLocaleLowerCase(),
        status: filterStatus,
      },
    });
  };
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };
  render() {
    var {
      tasksEditing,
      sortBy,
      sortValue,
    } = this.state;
    var { isDisplayForm }  = this.props
    var eleTaskForm = isDisplayForm === true ? (
      <TaskForm       
        tasksEditing={tasksEditing}
      />
    ) : (
      ""
    );
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
                isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
              }
            >
              {eleTaskForm}
            </div>
            <div
              className={
                isDisplayForm === true
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button
                    type="button"
                    className="btn btn-primary mabtn display"
                    onClick={this.onOpenForm}
                  >
                    Thêm Công Việc
                  </button>
                </div>
              </div>
              <Control
                onSearch={this.onSearch}
                onSort={this.onSort}
                sortBy={sortBy}
                sortValue={sortValue}
              />
              <TaskList
                onFilter={this.onFilter}
                onUpdateStatus={this.onUpdateStatus}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state =>{
  return{
    isDisplayForm : state.isDisplayForm
  };
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    onToggleForm : ()=>{
      dispatch(actions.toggleForm())
    },
  };
}
export default connect(mapStateToProps,mapDispatchToProps) (Todo);
