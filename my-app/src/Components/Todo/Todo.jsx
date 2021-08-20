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
  onOpenForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
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
  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      tasksEditing: null,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onUpdateStatus = (id) => {
    var  tasks  = this.state.tasks;
    // var index = this.findIndex(id);
    var index = tasks.findIndex(task=> task.id === id)
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((tasks, index) => {
      if (tasks.id === id) {
        result = index;
      }
    });
    return result;
  };
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
    // console.log(keywork)
    this.setState({
      keyWord: keywork,
    });
  };
  onFilter = (filterName, filterStatus) => {
    // console.log(filterName , '-', filterStatus)
    // console.log(typeof(filterStatus))
    filterStatus = parseInt(filterStatus, 10);
    // console.log(typeof filterStatus)
    this.setState({
      filter: {
        name: filterName.toLocaleLowerCase(),
        status: filterStatus,
      },
    });
  };
  onSort = (sortBy, sortValue) => {
    // console.log(sortBy,'-',sortValue)
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };
  render() {
    var {
      tasks,
      isDisplayForm,
      tasksEditing,
      filter,
      keyWord,
      sortBy,
      sortValue,
    } = this.state;
    // console.log(filter)
    //filter name
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    if (keyWord) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyWord) !== -1;
      });
    }
    if (sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;
        else if (a.status < b.status) return sortValue;
        else return 0;
      });
    }

    // console.log(sortBy,'-',sortValue)
    var eleTaskForm = isDisplayForm ? (
      <TaskForm
        oncloseForm={this.oncloseForm}
        onSubmit={this.onSubmit}
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
                    onClick={this.onOpenForm}
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
              <Control
                onSearch={this.onSearch}
                onSort={this.onSort}
                sortBy={sortBy}
                sortValue={sortValue}
              />
              <TaskList
                onFilter={this.onFilter}
                tasks={tasks}
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

export default Todo;
