import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { baseURL } from '../utils/baseURL';
import ProductBox from './ProductBox';

const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
`;

const ProductList = ({kind}) => {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async () => {
      try {
        const {data} = await axios.get(`${baseURL}/products?kind=${kind}`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [kind])

  return (
    <Container>
      {products && products.map((item) => (<ProductBox data={item} key={item._id}/>))}
    </Container>
  )
}

export default ProductList
