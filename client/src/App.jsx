import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

const App = () => {
  const {userAuth} = useSelector(state => state.usersReducer);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<Products/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={userAuth ? <Navigate to="/" /> : <Login/>} />
        <Route path="/register" element={userAuth ? <Navigate to="/"/> : <Register/>} />
      </Routes>
    </Router>
  )
}

export default App
