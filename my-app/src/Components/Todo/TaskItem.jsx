/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    var {tasks,index} = this.props
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{tasks.name}</td>
        <td className="text-center">
          <span className={tasks.status === true ? 'label label-danger' : 'label label-success'}>
            {tasks.status === true ? 'Kích Hoạt' : 'Ẩn'}
            </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
