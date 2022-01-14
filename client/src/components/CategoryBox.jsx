import styled from "styled-components";

const Container = styled.div`
  background-color:${props=>props.bgColor};
  flex:1;
  min-width:380px;
  height: 250px;
  margin:10px;
  overflow:hidden;
`;
const Wrapper = styled.div`
height:100%;
padding:20px;
display: flex;
position:relative;

`;
const Image = styled.img`
position:absolute;
  height:70%;
  object-fit: cover;
  right:-30px;
  bottom:30px;
  
`;
const TextBox = styled.div`
  position:absolute;
  bottom:100px;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 10px;
`;
const Desc = styled.span`
  color:gray;
  font-size: 14px;
`;

const CategoryBox = ({item}) => {
  return (
    <Container bgColor={item.bgColor}>
      <Wrapper>
        <Image src={item.img}/>
        <TextBox>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
        </TextBox>
      </Wrapper>
    </Container>
  )
}

export default CategoryBox
