import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Topbar from '../components/Topbar';

const Container = styled.div `

`;

const Wrapper = styled.div `
  display: flex;
  padding:20px;
`;

const Left = styled.div `
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;

`;

const LeftTitle = styled.h1`
  font-weight: 300;
  margin-bottom: 60px;
  border-bottom: 2px solid lightgray;
  padding-bottom: 3px;
  display:inline-block;
`;

const LeftWrapper = styled.div`
  width:250px;
  margin-left: 20px;
  position:sticky;
  top:50px;
  left:0;
  margin-bottom: 50px;
`;


const ItemTitle = styled.h3 `
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 15px;
`;

const Size = styled.div `
  margin-bottom:60px;
  width:80%;
`;

const SizeItems = styled.div `
  display: flex;
  flex-wrap:wrap;
`;

const SizeItem = styled.div `
font-size: 14px;
  margin-right: 20px;
  margin-bottom:10px;
  width:30px;
  height:30px;
  border-radius: 5px;
  padding:0 3px;
  border:1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Color = styled.div `
  width:90%;
  margin-bottom: 60px;
`;

const ColorItems = styled.div `
  display: flex;
  flex-wrap:wrap;
  `;

const ColorItem = styled.div `
  width:20px;
  height:20px;
  border-radius: 50%;
  background-color:${props=>props.color};
  margin-right: 15px;
  margin-bottom:15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Brand = styled.div ``;

const BrandItems = styled.div `
  display: flex;
  flex-wrap:wrap;
`;

const BrandItem = styled.div `
  border:1px solid gray;
  padding:2px 6px;
  border-radius: 10px;
  margin:0 10px 15px 0;
`;



const Right = styled.div `
  flex:3;
  padding-right:60px;
`;

const TitleBox = styled.div `
  display: flex;
  padding:10px;
  justify-content: space-between;
  margin-top:80px;
  
`;

const Title = styled.h1 `
  font-weight: 300;
`;

const Select = styled.select `
 padding:10px;
`;

const Option = styled.option ``;

const Products = () => {
    return (
        <Container>
            <Topbar/>
            <Navbar/>

            <Wrapper>
                <Left>
                  <LeftWrapper>
                  <LeftTitle>FILTER</LeftTitle>

                    <Size>
                        <ItemTitle>Size</ItemTitle>
                        <SizeItems>
                            <SizeItem>XS</SizeItem>
                            <SizeItem>S</SizeItem>
                            <SizeItem>M</SizeItem>
                            <SizeItem>L</SizeItem>
                            <SizeItem>XL</SizeItem>
                            <SizeItem>XXL</SizeItem>
                        </SizeItems>
                    </Size>

                    <Color>
                        <ItemTitle>Color</ItemTitle>
                        <ColorItems>
                            <ColorItem color="red"></ColorItem>
                            <ColorItem color="orange"></ColorItem>
                            <ColorItem color="yellow"></ColorItem>
                            <ColorItem color="green"></ColorItem>
                            <ColorItem color="blue"></ColorItem>
                            <ColorItem color="darkblue"></ColorItem>
                            <ColorItem color="purple"></ColorItem>
                            <ColorItem color="crimson"></ColorItem>
                            <ColorItem color="gray"></ColorItem>
                            <ColorItem color="lightpink"></ColorItem>
                            <ColorItem color="beige"></ColorItem>
                            <ColorItem color="lightblue"></ColorItem>
                        </ColorItems>
                    </Color>

                    <Brand>
                        <ItemTitle>Brands</ItemTitle>
                        <BrandItems>
                            <BrandItem>Calvin Klien</BrandItem>
                            <BrandItem>Nike</BrandItem>
                            <BrandItem>Adidas</BrandItem>
                            <BrandItem>Levis</BrandItem>
                            <BrandItem>Tom Brown</BrandItem>
                            <BrandItem>Shanel</BrandItem>
                            <BrandItem>THE NORTH FACE</BrandItem>
                        </BrandItems>
                    </Brand>

                  </LeftWrapper>
                </Left>
                <Right>
                    <TitleBox>
                        <Title>132 SHOESES</Title>
                        <Select>
                            <Option>Latest</Option>
                            <Option>RATING</Option>
                            <Option>POPULAR</Option>
                            <Option>PRICE DESC</Option>
                            <Option>PRICE ASC</Option>
                        </Select>
                    </TitleBox>

                    <ProductList kind={"all"}/>

                </Right>

            </Wrapper>

            <Footer/>
        </Container>
    )
}

export default Products
