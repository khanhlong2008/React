/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Button from "./Components/Button/Button";
import Menu from "./Components/Menu/Menu";
import ProductList from "./Components/ProductList/ProductList";
function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Button label="Thêm Sản Phẩm" type="button" color="primary" />
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
