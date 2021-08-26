import React, { Component } from "react";
import Custom from "./../Components/Custom";
import { connect } from "react-redux";
import { actUpdateQuantity } from "./../Actions/index";
class CustomContainer extends Component {
  render() {
    var { custom, burger, onUpdateQuantity } = this.props;
    return (
      <Custom
        custom={custom}
        burger={burger}
        onUpdateQuantity={onUpdateQuantity}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    custom: state.custom,
    burger: state.burger,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateQuantity: (buger) => {
      dispatch(actUpdateQuantity(buger));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomContainer);
