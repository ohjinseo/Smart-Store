import {Link} from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div `
  background-color:${props => props.bgColor};
  flex:1;
  min-width:380px;
  height: 250px;
  margin:10px;
  overflow:hidden;
  
`;

const Wrapper = styled.div `
height:100%;
padding:20px;
display: flex;
`;

const Left = styled.div `
  flex:1;
  display: flex;
  align-items: center
`;

const TextBox = styled.div `
  background-color: white;
  width:120px;
  padding:5px 0;
  margin-right: 10px;
  margin-top: 100px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1 `
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 10px;
`;

const Desc = styled.span `
  color:gray;
  font-size: 14px;
`;

const Right = styled.div `
  flex:2;
`;

const Image = styled.img `
  max-height:80%;
  object-fit: cover;
  margin-top: 20px;
`;



const CategoryBox = ({item}) => {
    return (

        <Container bgColor={item.bgColor}>
            <Link
                to={`/products?category=${item.title}`}
                style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                <Wrapper>
                    <Left>
                        <TextBox>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </TextBox>
                    </Left>

                    <Right>
                        <Image src={item.img}/>
                    </Right>

                </Wrapper>
            </Link>
        </Container>
    )
}

export default CategoryBox
