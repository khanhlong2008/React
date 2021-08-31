import React, { Component } from "react";
import PropTypes from "prop-types";
class Button extends Component {
  render() {
    const { label, color, type, onClick } = this.props;
    return (
      <button
        type={type}
        className={`btn  btn-${color} mr-10 mb-10`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
Button.defaultProps = {
  color: "secondary",
  label: "Button",
  type: "button",
};
Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};
export default Button;
