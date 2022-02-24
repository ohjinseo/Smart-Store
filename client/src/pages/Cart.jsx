import {Add, CancelOutlined, Remove} from '@material-ui/icons';
import { useEffect } from 'react';
import { useState } from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { addProductAction, deleteProductAction } from '../redux/slices/carts/cartSlice';
import { baseURL } from '../utils/baseURL';
import { registerOrderAction } from '../redux/slices/orders/orderSlice';

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
    position:relative;
    
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
background-color:#faf4f4;
`;

const ProductImage = styled.img `
  position: absolute; 
  top: 0;
  left: 0; 
  right: 0; 
  bottom: 0; 
  max-width: 80%; 
  max-height:80%;
  object-fit:cover;
  height: auto;
  margin:auto;
`;

const ProductDetail = styled.div `
    flex:2.1;
    margin-left: 20px;
`;

const ProductTitle = styled.p `
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    &:hover{
        text-decoration: underline;
    }
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
    cursor:pointer;
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

const ProductCancel = styled.div `
    position:absolute;
    right:0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding:2px 4px;
    background-color:crimson;
    color:white;
    cursor:pointer;
`;

const ProductCancelIcon = styled.div ``;

const Right = styled.div `
    flex:1;
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SummaryBox = styled.div `
    width:90%;
    margin-top:110px;
    padding:60px 30px;
    border:1px solid #333;
    //background-color:#f4f4fc;
    border-radius:5px;
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
    border-bottom: 1px dashed  black;
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
    cursor:pointer;
`;

const Cart = () => {
    const dispatch = useDispatch();
    const {cart, totalPrice} = useSelector(state => state.cartsReducer);
    const {userAuth} = useSelector(state=>state.usersReducer);
    const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const sendStripeToken = async () => {
            try {
                const userToken = userAuth?.token;
                const config = {
                    headers: {
                      token: `Bearer ${userToken}`,
                    },
                  };

                const res = await axios.post(`${baseURL}/checkout`, {
                    tokenId:stripeToken.id,
                    amount:totalPrice
                }, config);

                dispatch(registerOrderAction(res));
            } catch (error) {
                
            }
        }
        stripeToken && sendStripeToken();
    }, [stripeToken])
    
    // add, delete, all
    const handleProductAmountControl = (kind, productId, amount) => {
        if(kind === "add" && amount < 9){
            dispatch(addProductAction({productId, count:1}));
        }
        else if(kind === "delete" && amount > 1){
            dispatch(deleteProductAction({productId, kind}));
        }
        else if(kind === "all"){
            if(window.confirm("상품을 정말 취소하시겠습니까?")){
                dispatch(deleteProductAction({productId, kind}));
            }
        }
        else if(amount >= 9){
            window.confirm("상품은 10개 미만으로 주문 가능합니다");
        }
        else if(amount <= 1){
            if(window.confirm("상품을 정말 취소하시겠습니까?")){
                dispatch(deleteProductAction({productId, kind:"all"}));
            }
        }
    }

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
{cart?.products?.map((product) => 
                    <ProductBox key={product?.productId?._id}>
                        <ProductImageAndDetailBox>
                            <ProductImageBox>
                        <Link
                to={`/product/${product?.productId?._id}`}
                style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                                <ProductImage src={product?.productId?.img}/>
                            </Link>
                            </ProductImageBox>
                            <ProductDetail>
                                <ProductTitle>
                                <Link
                to={`/product/${product?.productId?._id}`}
                style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>{product?.productId?.title}</Link></ProductTitle>
                                <ProductBrand>{product?.productId?.categories[0]}</ProductBrand>
                            </ProductDetail>
                        </ProductImageAndDetailBox>

                        <ProductColorBox>
                            {product?.productId?.color?.map((c, idx) => (
                                <ProductColor key={idx} color={c}></ProductColor>
                            ))}
                        </ProductColorBox>

                        <ProductSizeBox>
                            {product?.productId?.size?.map((s, idx) => (
                                <ProductSize key={idx}>{s}</ProductSize>
                            ))}
                        </ProductSizeBox>

                        <ProductAmountBox>
                            <CountIcon><Remove onClick={(e) => 
                                handleProductAmountControl("delete", product?.productId?._id, product?.amount)}/></CountIcon>
                            <Count>{product?.amount}</Count>

                            <CountIcon><Add onClick={() => 
                                handleProductAmountControl("add", product?.productId?._id, product?.amount)}/></CountIcon>
                        </ProductAmountBox>

                        <ProductPriceBox>
                            <ProductPrice>$ {product?.productId?.price}</ProductPrice>
                        </ProductPriceBox>

                        <ProductCancel>
                            <ProductCancelIcon onClick={() => 
                                handleProductAmountControl("all", product?.productId?._id)}>취소</ProductCancelIcon>
                        </ProductCancel> 
                        
                    </ProductBox>
                        )}
                </Left>

                <Right>
                    <SummaryBox>
                        <RightTitle>Order Summary</RightTitle>
                        <SummaryDetails>
                            <TotalProductsBox>

                                <TotalProductsText>TotalProduct</TotalProductsText>
                                <TotalProducts>$ {totalPrice}</TotalProducts>

                            </TotalProductsBox>

                            <ShippingCostBox>
                                <ShippingCostText>Shipping Costs</ShippingCostText>
                                <ShippingCost>Free</ShippingCost>
                            </ShippingCostBox>

                            <DiscountBox>
                                <DiscountText>Discount Costs</DiscountText>
                                <Discount>$ 0</Discount>
                            </DiscountBox>

                            <TotalBox>
                                <TotalText>Total</TotalText>
                                <Total>$ {totalPrice}</Total>
                            </TotalBox>

                        </SummaryDetails>

                        <StripeCheckout
                        name="SMART-STORE"
                        image="https://i.ibb.co/j657tqg/pngegg-23.png"
                        billingAddress
                        shippingAddress
                        description={`총 금액 : ${totalPrice}`}
                        amount={totalPrice}
                        token={onToken}
                        stripeKey={STRIPE_KEY}
                        >
                            <CheckoutButton>
                                CHECKOUT NOW
                            </CheckoutButton>
                        </StripeCheckout>
                    </SummaryBox>
                </Right>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
