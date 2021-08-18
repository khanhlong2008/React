/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskForm extends Component {
  oncloseForm = ()=> {
    this.props.oncloseForm()
  }
    render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <h3 className="panel-title">Thêm Công Việc</h3>
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
          <form>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" required="required">
              <option value={1}>Kích Hoạt</option>
              <option value={0}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button type="submit" className="btn btn-danger">
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
