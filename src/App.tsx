import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ShoppingCartState from "./context/ShoppingCart/ShoppingCartState";
import Header from "./components/header/Header";
import './App.css'
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";

const App = () => {
  return (
    <>
      <ShoppingCartState>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Products />} />
          </Routes>
        </Router>
      </ShoppingCartState>
    </>
  )
}

export default App;
