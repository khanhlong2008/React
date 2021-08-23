import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message"
import ProductContainer from "./Containers/ProductContainer";




function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <main id="mainContainer">
          <div className="container">
            <ProductContainer/>
            <Message/>
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
