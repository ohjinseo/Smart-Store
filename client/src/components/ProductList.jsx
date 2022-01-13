import styled from "styled-components";
import { categoryData } from '../dummy';
import CategoryBox from './CategoryBox';

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding:0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ProductList = () => {
  return (
    <Container>
      <Wrapper>
{
  categoryData.map(item=>(
    
    <CategoryBox item={item}/>
  ))
}
     
      
      </Wrapper>
    </Container>
  )
}

export default ProductList
