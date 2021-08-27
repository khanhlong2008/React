import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./Components/Menu";
import router from "./router";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <Menu />
          {/* Nội dung */}
          <Switch>{this.showContentMenus(router)}</Switch>
        </div>
      </Router>
    );
  }
  showContentMenus = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default App;
