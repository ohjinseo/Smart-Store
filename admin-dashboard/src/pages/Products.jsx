import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import { getProductsAction } from '../redux/slices/productSlice';



function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {products:prod} = useSelector(props => props.productsReducer);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  useEffect(() => {
    prod && setProducts(prod);
  },[prod])

  return (
    <div className="flex">
      <Navbar />
      <div className="w-11/12 flex justify-center">
        
        <div className="flex flex-col items-center w-10/12 mt-12 justify-center ">
          <div className="flex w-full border-solid border-b-[1px] border-gray-200 pb-5 mb-5">
            <div className="w-4/12">
              <span>PRODUCT DETAILS</span>
            </div>

            <div className="w-2/12 flex justify-center">
              <span>GRADE</span>
            </div>

            <div className="w-2/12 flex justify-center">
              <span>STOCK</span>
            </div>

            <div className="w-2/12 flex justify-center">
              <span>TOTAL SALES</span>
            </div>

            <div className="w-2/12 flex justify-center">
              <span>PRICE</span>
            </div>
          </div>

          {products && products?.map((p, idx) => (
            <ProductList key={idx} product={p}/>

          ))}


        </div>
        
      </div>
    </div>
  )
}

export default Products