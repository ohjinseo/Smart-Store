import {useState} from 'react';
import {useLocation} from 'react-router-dom';
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

const LeftTitle = styled.h1 `
  font-weight: 200;
  margin-bottom: 25%;
  border-bottom: 1px solid black;
  padding-bottom: 3px;
  display:inline-block;
`;

const LeftWrapper = styled.div `
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
  margin-bottom:15%;
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
  cursor:pointer;
  background-color:${props => props.filter.includes(props.size) && "#333"};
  color:${props => props.filter.includes(props.size) && "white"};
`;

const Color = styled.div `
  width:90%;
  margin-bottom: 15%;
`;

const ColorItems = styled.div `
  display: flex;
  flex-wrap:wrap;
  `;

const ColorItem = styled.div `
  width:20px;
  height:20px;
  border-radius: 5px;
  background-color:${props => props.color};
  margin-right: 15px;
  margin-bottom:20px;
  box-sizing:border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover{
    transform: scale(1.2);
  }
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
`;

const CheckImage = styled.img`
position:absolute;
top:-3px;
  display:${props => !props.filter.includes(props.color) && "none"};
  width:90%;
  height:90%;
  
`;

const Brand = styled.div ``;

const BrandItems = styled.div `
  margin-bottom:20px;
`;

const FilterTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom:10px;
`;

const BrandItem = styled.div `
  display:inline-box;
  border:1px solid gray;
  padding:2px 6px;
  border-radius: 5px;
  margin:0px 10px 10px 0;
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
    const location = useLocation();
    const categoryName = location
        .pathname
        .split("/")[2];
    const sizeArray = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ];
    const colorArray = [
        "black",
        "SlateGray",
        "DimGray",
        "Silver",
        "WhiteSmoke",
        "white",
        "DarkSlateGray",
        "CadetBlue",
        "LightBlue",
        "Red",
        "Tomato",
        "PeachPuff",
        "MidnightBlue",
        "Blue",
        "CornflowerBlue",
        "Indigo",
        "MediumPurple",
        "Lavender",
        "Teal",
        "MediumAquaMarine",
        "Honeydew",
        "Gold",
        "Khaki",
        "Ivory"
    ]
    const [filter, setFilter] = useState({sort: "latest", sizes: [], colors: []})

    const handleFilter = (kind, s, e) => {
        // eslint-disable-next-line default-case
        switch (kind) {
            case "size":
                if (filter.sizes.includes(s)) {
                    setFilter({
                        ...filter,
                        sizes: filter
                            .sizes
                            .filter((size) => size !== s)
                    })
                } else {
                    setFilter({
                        ...filter,
                        sizes: [
                            ...filter.sizes,
                            s
                        ]
                    })
                }
                break

            case "color":
                if (filter.colors.includes(s)) {
                    setFilter({
                        ...filter,
                        colors: filter
                            .colors
                            .filter((color) => color !== s)
                    })
                } else {
                    setFilter({
                        ...filter,
                        colors: [
                            ...filter.colors,
                            s
                        ]
                    })
                }
                break

            case "sort":
                setFilter({
                    ...filter,
                    sort: e
                        ?.target.value
                })
        }

    }

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
                                {
                                    sizeArray.map(
                                        (s, idx) => (<SizeItem key={idx} filter={filter?.sizes} onClick={() => handleFilter("size", s)} size={s}>{s}</SizeItem>)
                                    )
                                }
                            </SizeItems>
                        </Size>

                        <Color>
                            <ItemTitle>Color</ItemTitle>
                            <ColorItems>
                                {
                                    colorArray.map((c, idx) => (
                                        <ColorItem key={idx} filter={filter?.colors} onClick={() => handleFilter("color", c)} color={c}>
                                          <CheckImage filter={filter?.colors} color={c} src="https://i.ibb.co/HrCpmmS/check.png"/>
                                        </ColorItem>

                                    ))
                                }
                            </ColorItems>
                        </Color>

                        <Brand>
                            
                            <BrandItems>
                              <FilterTitle>SORT FILTER</FilterTitle>
                              <BrandItem>{filter.sort}</BrandItem>
                            </BrandItems>

                            <BrandItems>
                              <FilterTitle>SIZE FILTER</FilterTitle>
                              {filter?.sizes.map((s) => (
                                <BrandItem>{s}</BrandItem>
                              ))}
                            </BrandItems>

                            <BrandItems>
                              <FilterTitle>COLOR FILTER</FilterTitle>
                              <ColorItems>
                              {filter?.colors.map((c, idx) => (
                                <ColorItem key={idx}  color={c}></ColorItem>
                              ))}
                              </ColorItems>
                            </BrandItems>
                        </Brand>

                    </LeftWrapper>
                </Left>
                <Right>
                    <TitleBox>
                        <Title>{
                                categoryName
                                    ? categoryName
                                    : "ALL PRODUCTS"
                            }</Title>
                        <Select onChange={e => handleFilter("sort", "", e)}>
                            <Option value="latest">LATEST</Option>
                            <Option value="oldest">OLDEST</Option>
                            <Option value="rating">RATING</Option>
                            <Option value="popular">POPULAR</Option>
                            <Option value="desc">PRICE DESC</Option>
                            <Option value="asc">PRICE ASC</Option>
                        </Select>
                    </TitleBox>

                    <ProductList filter={filter} category={categoryName}/>

                </Right>

            </Wrapper>

            <Footer/>
        </Container>
    )
}

export default Products
