import styled from "styled-components";
import Navbar from '../components/Navbar';
import CategoryList from '../components/CategoryList';
import Slider from '../components/Slider';
import Topbar from '../components/Topbar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const ProductContainer = styled.div`
  padding:0 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 310px;
`;

const Title = styled.h1 `
  font-weight: 300;
  font-size: 32px;
  margin-top:100px;
  margin-bottom:50px;
  padding-bottom: 5px;
  border-bottom: 3px solid lightgray;
  
`;

const Home = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Slider/>
            <CategoryList/>
            <ProductContainer>
                <Title>LATEST</Title>
                <ProductList kind={"new"}/>
                <Title >TOP RATING</Title>
                <ProductList kind={"popular"}/>
            </ProductContainer>
            <Footer />
        </div>
    )
}

export default Home
