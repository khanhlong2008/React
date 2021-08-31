import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
    };
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onLogin = (e) => {
    e.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    }
  };
  render() {
    var { txtUsername, txtPassword } = this.state;
    var loggedInUser = localStorage.getItem('user');
    if(loggedInUser !== null){
        var {location} = this.props
        return <Redirect to={{
            pathname: '/products',
            state:{
                from: location
            }
        }}/>
    }  
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onLogin}>
              <legend>Login</legend>
              <div className="form-group">
                <label htmlFor>UserName</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtUsername"
                  value={txtUsername}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor>PassWord :</label>
                <input
                  type="password"
                  className="form-control"
                  name="txtPassword"
                  value={txtPassword}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
