import { Call, Facebook, GitHub, Instagram, LinkedIn, LocationOn,MailOutlined, Twitter } from '@material-ui/icons';
import styled from "styled-components";

const Container = styled.div `
  height:30vh;
  width:100%;
  background-color:#333;
  display: flex;
  justify-content: center;
`;

const Wrapper= styled.div`
width:80%;
height:100%;
display: flex;
justify-content: space-between;

color:white;
`;


const Left= styled.div`
flex:1;
padding: 30px;
`;

const Title= styled.h1`
font-size: 24px;
font-weight: 400;
margin-bottom: 30px;

`;

const Icons= styled.div`
display: flex;
margin-bottom: 30px;
`;

const Icon= styled.div`
width: 30px;
height:30px;
display: flex;
align-items: center;
justify-content: center;
margin-right:20px;
background-color:#${(props) => props.color};
border-radius: 50%;
padding:3px;


`;

const LeftTextBox = styled.p`
  color:gray;
  font-weight: 300;
  width: 80%;
`;


const Menu= styled.ul`
list-style:none;
padding:0;
display: flex;
justify-content: center;
margin-top: 30px;
`;

const MenuItem= styled.li`
text-decoration: none;
margin-bottom: 50px;
font-weight: 200;
margin-right: 40px;
padding-right:40px;
border-right: 2px solid gray;
border-right:${props=>props.last};
`;

const Right= styled.div`
flex:1.2;
padding: 30px;
display: flex;
flex-direction: column;
margin-top: 10px;
position:relative;
`;

const Image = styled.div`
  position:absolute;
  width:200px;
  object-fit: cover;
  top:20px;
  right:260px;
`;

const ContactItems= styled.ul`
list-style:none;
padding:0;

`;

const ContactItem= styled.li`
display: flex;
align-items: center;
margin-bottom: 10px;
font-weight: 300;
font-size: 14px;
`;

const ContactItemText= styled.div`
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Title>SMART-STORE</Title>
                    <Icons>
                      <Icon color="111"><GitHub /></Icon>
                      <Icon color="3B5999"><Facebook /></Icon>
                      <Icon color="E4405F"><Instagram /></Icon>
                      <Icon color="55ACEE"><Twitter /></Icon>
                      <Icon color="0A66C2"><LinkedIn /></Icon>
                    </Icons>
                    <LeftTextBox>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe eveniet quidem illo commodi? Consequatur aspernatur voluptate suscipit dolor quae enim consectetur at provident dolorem quidem repellendus fugiat, quaerat voluptatibus?</LeftTextBox>
                </Left>
                <Right>
              
                  {/* <ContactItems>
                    <ContactItem>
                      <Icon><LocationOn/></Icon>
                      <ContactItemText>Busan Jingoo Dongeul</ContactItemText>
                    </ContactItem>
                    <ContactItem>
                      <Icon><Call /></Icon>
                      <ContactItemText>+82-010-1111-1111</ContactItemText>
                    </ContactItem>
                    <ContactItem>
                      <Icon><MailOutlined /></Icon>
                      <ContactItemText>smartstore@gmail.com</ContactItemText>
                    </ContactItem>
                  </ContactItems>

                  <Image>지도를 넣어보자</Image>

                  <Menu>
                        <MenuItem>SMART-STORE</MenuItem>
                        <MenuItem>ABOUT US</MenuItem>
                        <MenuItem>MY INFO</MenuItem>
                        <MenuItem>CART</MenuItem>
                        <MenuItem last="none">BLOG</MenuItem>
                    </Menu> */}
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer
