import React from 'react'
import styled from 'styled-components'
import ProductBox2 from './ProductBox2'
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";

const Container = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

const Box = styled.div `
  width: 85%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
`;

const Name = styled.h1 `
  font-size: 35px;
      font-weight: 400;
`;

const ArrowBack = styled(ArrowBackIos)`
   position: absolute;
      border-radius: 50%;
      border: 2px solid black;
      top: 35%;
      font-size: 36px;
      cursor: pointer;
      left: -80px;
      padding: 5px 0 5px 10px;
`;

const ArrowForward = styled(ArrowForwardIos)`
   position: absolute;
      border-radius: 50%;
      border: 2px solid black;
      top: 35%;
      font-size: 36px;
      cursor: pointer;
      right: -80px;
      padding: 5px;
`;

const Wrapper = styled(Slider)`
  width: 88%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;


function SampleNextArrow(props) {
    const {onClick} = props;
    return (<ArrowBack className="leftIcon" onClick={onClick}/>);
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (<ArrowForward className="rightIcon" onClick={onClick}/>);
}

function ProductList2({name}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "20px",
        prevArrow: <SampleNextArrow/>,
        nextArrow: <SamplePrevArrow/>
    };

    return (
        <Container>
            <Box>
                <Name>{name}</Name>
            </Box>

            <Wrapper {...settings} dotsClass="test-css">
                <ProductBox2/>
                <ProductBox2/>
                <ProductBox2/>
                <ProductBox2/>
                <ProductBox2/>
                <ProductBox2/>
            </Wrapper>
        </Container>
    )
}

export default ProductList2