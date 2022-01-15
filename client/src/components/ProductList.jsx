import styled from "styled-components";
import ProductBox from './ProductBox';

const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  
  
`;

const ProductList = () => {
  return (
    <Container>
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
    </Container>
  )
}

export default ProductList
