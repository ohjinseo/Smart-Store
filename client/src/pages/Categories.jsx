import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductList2 from '../components/ProductList2'
import Topbar from '../components/Topbar'

const Container = styled.div``;


const Products = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
    padding-top: 2px;
    width: 95%;
    position: relative;
`;

const ProductListBox = styled.div`
  margin-top: 100px;
  margin-bottom: 250px;
`;

function Categories() {
  return (
        <Container>
            <Topbar/>
            <Navbar/>
            <Products>
              <Wrapper>

                <ProductListBox>
                  <ProductList2 name="NIKE"/>
                  <ProductList2 name="Jacket"/>
                  <ProductList2 name="SHANEL"/>
                  <ProductList2 name="SHOES"/>
                </ProductListBox>
              </Wrapper>
            </Products>
            <Footer />
        </Container>
  )
}

export default Categories