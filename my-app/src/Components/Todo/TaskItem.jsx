/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskList extends Component {
  render() {
    return (
        <tr>
        <td>1</td>
        <td>Học lập trình</td>
        <td className="text-center">
          <span className="label label-success">Kích Hoạt</span>
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

export default TaskList;
