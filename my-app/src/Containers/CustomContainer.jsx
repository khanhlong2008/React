import React, { Component } from 'react';
import Custom from './../Components/Custom'
import {connect} from 'react-redux'
class CustomContainer extends Component {
    render() {
        var {custom} = this.props
        return (
            <Custom>
            {this.showCustom(custom)}
            </Custom>
        );
    }
    showCustom= (custom)=>{
        var result = null;
        return result;
    }
}

const mapStateToProps = (state)=>{
    return { 
        custom : state.Custom
    }
}
export default connect(mapStateToProps,null) (CustomContainer);