import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AddProduct from './pages/AddProduct';
import Home from "./pages/Home";
import Login from './pages/Login';
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add/product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App