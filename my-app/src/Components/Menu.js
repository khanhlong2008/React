import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
const menu = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "About",
    to: "/about",
    exact: false,
  },
  {
    name: "Contact",
    to: "/contact",
    exact: false,
  },
  {
    name: "Products",
    to: "/products",
    exact: false,
  },
  {
    name: "Login",
    to: "/login",
    exact: false,
  },
];
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenu(menu)}</ul>
      </nav>
    );
  }
  showMenu = (menu) => {
    var result = null;
    if (menu.length > 0) {
      result = menu.map((menu, index) => {
        return (
          <MenuLink
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.exact}
            key={index}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
