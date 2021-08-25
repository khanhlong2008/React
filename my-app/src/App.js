/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Cotact from "./Components/Contact";
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
function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu */}
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <MenuLink to="/" label="Trang Chủ" activeOnlyWhenExact={true}/>
            <MenuLink to="/about" label="Giới Thiệu" />
            <MenuLink to="/contact" label="Liên Hệ" />
          </ul>
        </nav>
        {/* Nội dung */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Cotact} />
      </div>
    </Router>
  );
}
export default App;
