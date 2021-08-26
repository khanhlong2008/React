import React, { Component } from "react";
import BurgerCake from "./../Components/BurgerCake";
import { connect } from "react-redux";
class BurgerContainer extends Component {
  render() {
    var {burger} = this.props
    return <BurgerCake buger={burger}></BurgerCake>;
  }
 
}
const mapStateToProps = state =>{
    return{
        burger: state.burger
    }
}
export default connect(mapStateToProps,null) (BurgerContainer);
