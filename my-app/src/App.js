import Footer from "./components/Footer";
import Header from "./components/Header";
import CartContainer from "./Containers/CartContainer";
import MessageContainer from "./Containers/MessageContainer";
import ProductContainer from "./Containers/ProductContainer";




function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <main id="mainContainer">
          <div className="container">
            <ProductContainer/>
            <MessageContainer/>
            <CartContainer/>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
