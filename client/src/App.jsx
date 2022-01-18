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
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<Products/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
