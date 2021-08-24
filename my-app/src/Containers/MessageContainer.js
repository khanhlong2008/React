import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Message from "./../components/Message";
class MessageContainer extends Component {
  render() {
      var {message} = this.props
    return <Message message={message}/>;
  }
}
// MessageContainer.propTypes = {
//     message: PropTypes.array.isRequired
// }
// lay states tu store keo ve de nhan props
const mapstateToProps = (state) => {
  return {
    message: state.message
  };
};
export default connect(mapstateToProps, null)(MessageContainer);
