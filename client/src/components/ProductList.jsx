import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const category = location.search.split("=")[1];
  
  useEffect(()=>{
    const getProducts = async () => {
      try {
        if(!kind && !category){
          const {data} = await axios.get(`${baseURL}/products/`); 
          setProducts(data);
        }
        else{
          const {data} = kind ? await axios.get(`${baseURL}/products?kind=${kind}`) : 
          await axios.get(`${baseURL}/products?category=${category}`);
          setProducts(data);
        }
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
