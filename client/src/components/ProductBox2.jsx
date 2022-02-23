import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const BoxTop = styled.div`
  width:95%;
  height:450px;
  cursor:pointer;
  background-color:#ece8e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 90%; 
  max-height:90%;
  object-fit: cover;
`;

const BoxBottom = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
`;

const Price = styled.p`
  margin-top: 5px;
`;


function ProductBox2() {
  return (
    <Container>
      <BoxTop>
        <Image src="https://i.ibb.co/NsxfVLt/pngegg-19.png" />
      </BoxTop>
      <BoxBottom>
        <Title>
          blue jeans
        </Title>

        <Price>
          $92
        </Price>
      </BoxBottom>
      </Container>
  )
}

export default ProductBox2