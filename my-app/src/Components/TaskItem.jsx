/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {connect} from 'react-redux'
import * as actions from './../actions/index'

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
          className={tasks.status === true ? 'label label-primary potion' : 'label label-primary potion'}
          onClick={this.onUpdateStatus}
          >
            {tasks.status === true ? 'Kích Hoạt' : 'Ẩn'}
            </span>
        </td>
        <td className="text-center">
          <button 
          type="button" 
          className="btn btn-primary"
          onClick={this.onUpdate}
          >
            Sửa
          </button>
          &nbsp;
          <button 
          type="button" 
          className="btn btn-primary"
          onClick={this.onDelete}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state =>{
  return{};
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    onUpdateStatus : (id)=>{
      dispatch(actions.updateStatus(id))
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskItem);

