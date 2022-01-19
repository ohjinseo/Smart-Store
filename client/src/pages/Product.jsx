import {Add, Remove, StarRate, StarRateOutlined} from '@material-ui/icons';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

const Container = styled.div `
`;

const Wrapper = styled.div `
  display: flex;
  min-height:100vh;
`;

const Left = styled.div `
  flex:1;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding:20% 0;

`;

const Image = styled.img `
  position: absolute; 
  top: 0;
  left: 0; 
  right: 0; 
  bottom: 0; 
  max-width: 90%; 
  max-height:90%;
  object-fit:cover;
  height: auto;
  margin:auto;
`;

const Right = styled.div `
  flex:1;
  background-color:#F0F2F9;
  padding:50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Brand = styled.div `
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color:gray;
`;

const Title = styled.h1 `
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 25px;
`;

const ReviewBox = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Stars = styled.div `
  display: flex;
  margin-right: 15px;
`;

const Icon = styled.div ``;

const Review = styled.div `
  color:gray;
`;

const Colors = styled.ul `
  list-style:none;
  padding:0;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  `;

const Color = styled.li `
  cursor:pointer;
  width:25px;
  height:25px;
  border-radius:50%;
  background-color:${props => props.color};
  margin-right:10px;
  border:${props => props.select && "3px solid white"};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Desc = styled.p `
  width:80%;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 30px;
  line-height:30px;
`;

const Sizes = styled.ul `
  list-style:none;
  padding:0;
  display: flex;
`;

const Size = styled.li `
  cursor:pointer;
  width: 20px;
  height: 20px;
  padding:5px;
  border-radius:5px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color:${props => props.select && "#333"};
  color:${props => props.select && "white"};
  box-shadow: ${props => props.select && "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
`;

const Price = styled.div `
  font-size: 34px;
  font-weight: 500;
  margin: 40px 0;
`;

const CountBox = styled.div `
  display: flex;
  align-content:center;
  margin-bottom: 50px;
`;

const CountIcon = styled.div `
  width:20px;
  height:20px;
  border:2px solid #575757;
  border-radius:5px;
  padding:5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
`;

const Count = styled.span `
  margin:0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight:400;
`;

const Buttons = styled.div `
  display: flex;
  
`;

const Button = styled.button `
  padding:15px 30px;
  border:none;
  background-color:${props => props.title == "Add"
    ? "teal"
    : "crimson"};
  color:white;
  font-size: 16px;
  font-weight: 600;
  margin-right:40px;
  cursor:pointer;
  border-radius:5px;
`;

const Product = () => {
    return (
        <Container>
            <Topbar/>
            <Navbar/>

            <Wrapper>
                <Left>
                    <Image src="https://i.ibb.co/NsxfVLt/pngegg-19.png"></Image>
                </Left>

                <Right>
                    <Brand>NIKE</Brand>
                    <Title>NIKE AIR SHOSES</Title>

                    <ReviewBox>
                        <Stars>
                            <Icon><StarRate/></Icon>
                            <Icon><StarRate/></Icon>
                            <Icon><StarRate/></Icon>
                            <Icon><StarRateOutlined/></Icon>
                            <Icon><StarRateOutlined/></Icon>

                        </Stars>

                        <Review>15 Reviews</Review>
                    </ReviewBox>

                    <Colors>
                        <Color color="gray" select="select"></Color>
                        <Color color="darkblue"></Color>
                    </Colors>

                    <Desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, eius.
                        Provident, repudiandae voluptate amet quidem, optio in modi, nostrum eligendi
                        architecto ipsa cupiditate iste pariatur exercitationem est voluptatum iure
                        nulla?
                    </Desc>

                    <Sizes>
                        <Size select="select">M</Size>
                        <Size>S</Size>
                        <Size>L</Size>
                    </Sizes>

                    <Price>$256.50</Price>

                    <CountBox>
                        <CountIcon><Remove/></CountIcon>
                        <Count>1</Count>
                        <CountIcon><Add/></CountIcon>
                    </CountBox>

                    <Buttons>
                        <Button title="Add">ADD TO CART</Button>
                        <Button>BUY NOW</Button>
                    </Buttons>
                </Right>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
