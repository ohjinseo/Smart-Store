import styled from "styled-components";
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';



const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductList />
    </div>
  )
}

export default Home
