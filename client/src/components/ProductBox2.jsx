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
  width:90%;
  cursor:pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
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
        <Image src="https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
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