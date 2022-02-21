import {Add, Remove} from '@material-ui/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

const Container = styled.div ``;

const Wrapper = styled.div `
    display: flex;
`;

const Left = styled.div `
    flex:3;
    padding:100px 60px;
`;

const TitleBox = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    align-items: center;

`;

const Title = styled.h1 `
    font-size: 30px;
`;

const TotalItems = styled.span `
    margin-right: 40px;
    font-size: 30px;
    font-weight: 600;
    
`;

const Details = styled.ul `
    display: flex;
    list-style:none;
    padding:0;
    margin-bottom: 30px;
    color:gray;
    font-weight: 300;
`;

const Product = styled.li `
    flex:3;
`;

const Color = styled.li `
    flex:.5;
    display: flex;
    justify-content: center;
`;

const Size = styled.li `
    flex:1;
    display: flex;
    justify-content: center;
`;

const Amount = styled.li `
    flex:1;
    display: flex;
    justify-content: center;
`;

const Price = styled.li `
    flex:1;
    display: flex;
    justify-content: center;
`;

const ProductBox = styled.div `
    display: flex;
    margin-bottom: 30px;
    padding-top:30px;
    border-top:1px solid #ebebeb;
    
    
`;

const ProductImageAndDetailBox = styled.div `
    flex:3;
    display: flex;
`;

const ProductImageBox = styled.div `
flex:.9;
display: flex;
justify-content: center;
position: relative;
overflow: hidden;
height:100px;
padding:22px 0;
background-color:#ececec;
`;

const ProductImage = styled.img `
  position: absolute; 
  top: 0;
  left: 0; 
  right: 0; 
  bottom: 0; 
  max-width: 100%; 
  max-height:100%;
  object-fit:cover;
  height: auto;
  margin:auto;
    
    
`;

const ProductDetail = styled.div `
    flex:2.1;
    margin-left: 10px;
    
`;

const ProductTitle = styled.p `
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const ProductBrand = styled.p `

`;

const ProductColorBox = styled.div `
    flex:.5;
    display: flex;
    justify-content: center;
`;

const ProductColor = styled.div `
    width:20px;
    height:20px;
    background-color: ${props => props.color};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 50%;
    margin-right: 10px;
`;

const ProductColorText = styled.div `
    color:gray;
    font-size: 14px;
    font-weight: 200;
`;

const ProductSizeBox = styled.div `
    flex:1;
    display: flex;
    justify-content: center;
`;

const ProductSize = styled.p `
    width:20px;
    height:20px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:3px;
`;

const ProductAmountBox = styled.div `
    flex:1;
    display: flex;
    justify-content: center;
    
`;

const CountIcon = styled.div `

`;

const Count = styled.span `
    margin:0 10px;
    font-size: 22px;
`;

const ProductPriceBox = styled.div `
    flex:1;
`;

const ProductPrice = styled.div `
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: 300;
`;

const ProductCancel = styled.div ``;

const ProductCancelIcon = styled.div ``;

const Right = styled.div `
    flex:1;
    background-color:#f3f3f3;
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const SummaryBox = styled.div `
    width:90%;
    padding-top:110px;
`;

const RightTitle = styled.h1 `
    margin-bottom: 50px;
    display:inline-block;
    font-size: 30px;
    font-weight: 400;
    
`;

const SummaryDetails = styled.div `
    font-size: 18px;
    font-weight: 600;
`;

const TotalProductsBox = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
`;

const TotalProductsText = styled.span `

`;

const TotalProducts = styled.span `
    font-size: 25px;
    font-weight: 300;

`;

const ShippingCostBox = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
`;

const ShippingCostText = styled.div ``;

const ShippingCost = styled.div `
    font-size: 25px;
    font-weight: 300;
`;

const DiscountBox = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    color:crimson;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgray;
`;

const DiscountText = styled.div ``;

const Discount = styled.div `
font-size: 25px;
    font-weight: 300;
`;

const TotalBox = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    align-items: center;
    margin-top: 30px;
`;

const TotalText = styled.div `
    font-size: 30px;
    font-weight: 400;
`;

const Total = styled.div `
    font-size: 30px;
    font-weight: 300;
`;

const CheckoutButton = styled.button `
    width:100%;
    padding:15px;
    border:none;
    background-color:#333;
    color:white;
`;

const Cart = () => {
    const [cart, setCart] = useState({});
    const res = useSelector(state => state.cartsReducer);
    console.log(res);


    return (
        <Container>
            <Topbar/>
            <Navbar/>

            <Wrapper>
                <Left>
                    <TitleBox>
                        <Title>SHOPPING CART</Title>
                        {/* //<TotalItems>3 Items</TotalItems> */}
                    </TitleBox>

                    <Details>
                        <Product>PRODUCT</Product>
                        <Color>COLOR</Color>
                        <Size>SIZE</Size>
                        <Amount>AMOUNT</Amount>
                        <Price>PRICE</Price>
                    </Details>

                    <ProductBox>
                        <ProductImageAndDetailBox>

                            <ProductImageBox>

                                <ProductImage src="https://i.ibb.co/q1zBpFs/pngegg-18.png"/>
                            </ProductImageBox>
                            <ProductDetail>
                                <ProductTitle>NIKE AIR SHOSES</ProductTitle>
                                <ProductBrand>NIKE</ProductBrand>
                            </ProductDetail>
                        </ProductImageAndDetailBox>

                        <ProductColorBox>
                            <ProductColor color="yellow"></ProductColor>

                        </ProductColorBox>

                        <ProductSizeBox>
                            <ProductSize>M</ProductSize>
                        </ProductSizeBox>

                        <ProductAmountBox>
                            <CountIcon><Remove/></CountIcon>
                            <Count>1</Count>
                            <CountIcon><Add/></CountIcon>
                        </ProductAmountBox>

                        <ProductPriceBox>
                            <ProductPrice>$192.44</ProductPrice>
                        </ProductPriceBox>

                        {/* <ProductCancel>
                            <ProductCancelIcon><CancelOutlined/></ProductCancelIcon>
                        </ProductCancel> */
                        }
                    </ProductBox>

                    <ProductBox>
                        <ProductImageAndDetailBox>

                            <ProductImageBox>

                                <ProductImage src="https://i.ibb.co/XFGzVW2/pngegg-17.png"/>
                            </ProductImageBox>
                            <ProductDetail>
                                <ProductTitle>NIKE AIR SHOSES</ProductTitle>
                                <ProductBrand>NIKE</ProductBrand>
                            </ProductDetail>
                        </ProductImageAndDetailBox>

                        <ProductColorBox>
                            <ProductColor color="yellow"></ProductColor>
                        </ProductColorBox>

                        <ProductSizeBox>
                            <ProductSize>M</ProductSize>
                        </ProductSizeBox>

                        <ProductAmountBox>
                            <CountIcon><Remove/></CountIcon>
                            <Count>1</Count>
                            <CountIcon><Add/></CountIcon>
                        </ProductAmountBox>

                        <ProductPriceBox>
                            <ProductPrice>$192.44</ProductPrice>
                        </ProductPriceBox>

                        {/* <ProductCancel>
                            <ProductCancelIcon><CancelOutlined/></ProductCancelIcon>
                        </ProductCancel> */
                        }
                    </ProductBox>

                    <ProductBox>
                        <ProductImageAndDetailBox>

                            <ProductImageBox>

                                <ProductImage src="https://i.ibb.co/9r5hGdX/Pngegg-6.png"/>
                            </ProductImageBox>
                            <ProductDetail>
                                <ProductTitle>NIKE AIR SHOSES</ProductTitle>
                                <ProductBrand>NIKE</ProductBrand>
                            </ProductDetail>
                        </ProductImageAndDetailBox>

                        <ProductColorBox>
                            <ProductColor color="teal"></ProductColor>
                        </ProductColorBox>

                        <ProductSizeBox>
                            <ProductSize>M</ProductSize>
                        </ProductSizeBox>

                        <ProductAmountBox>
                            <CountIcon><Remove/></CountIcon>
                            <Count>1</Count>
                            <CountIcon><Add/></CountIcon>
                        </ProductAmountBox>

                        <ProductPriceBox>
                            <ProductPrice>$192.44</ProductPrice>
                        </ProductPriceBox>

                        {/* <ProductCancel>
                            <ProductCancelIcon><CancelOutlined/></ProductCancelIcon>
                        </ProductCancel> */
                        }
                    </ProductBox>

                </Left>

                <Right>
                    <SummaryBox>
                        <RightTitle>Order Summary</RightTitle>
                        <SummaryDetails>
                            <TotalProductsBox>

                                <TotalProductsText>TotalProduct</TotalProductsText>
                                <TotalProducts>$245.80</TotalProducts>

                            </TotalProductsBox>

                            <ShippingCostBox>
                                <ShippingCostText>Shipping Costs</ShippingCostText>
                                <ShippingCost>Free</ShippingCost>
                            </ShippingCostBox>

                            <DiscountBox>
                                <DiscountText>Discount Costs</DiscountText>
                                <Discount>$-5.90</Discount>
                            </DiscountBox>

                            <TotalBox>
                                <TotalText>Total</TotalText>
                                <Total>$239.00</Total>
                            </TotalBox>

                        </SummaryDetails>

                        <CheckoutButton>
                            CHECKOUT NOW
                        </CheckoutButton>
                    </SummaryBox>

                </Right>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
