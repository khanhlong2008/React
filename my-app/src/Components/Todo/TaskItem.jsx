/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = ()=>{
    this.props.onUpdateStatus(this.props.tasks.id)
  }
  onDelete =()=>{
    this.props.onDelete(this.props.tasks.id)
  }
  onUpdate =()=>{
    this.props.onUpdate(this.props.tasks.id)
  }
  render() {
    var {tasks,index} = this.props
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{tasks.name}</td>
        <td className="text-center">
          <span 
          className={tasks.status === true ? 'label label-danger' : 'label label-success'}
          onClick={this.onUpdateStatus}
          >
            {tasks.status === true ? 'Kích Hoạt' : 'Ẩn'}
            </span>
        </td>
        <td className="text-center">
          <button 
          type="button" 
          className="btn btn-warning"
          onClick={this.onUpdate}
          >
            Sửa
          </button>
          &nbsp;
          <button 
          type="button" 
          className="btn btn-danger"
          onClick={this.onDelete}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
