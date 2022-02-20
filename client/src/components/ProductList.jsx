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

const ProductList = ({kind, category}) => {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async () => {
      try {
        const {data} = kind ? await axios.get(`${baseURL}/products?kind=${kind}`) : 
        await axios.get(`${baseURL}/products?category=${category}`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [category, kind])

  return (
    <Container>
      {products && products.map((item) => (<ProductBox data={item} key={item._id}/>))}
    </Container>
  )
}

export default ProductList
