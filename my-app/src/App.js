import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message"
import CartContainer from "./Containers/CartContainer";
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
            <CartContainer/>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
