import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<Products/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App
