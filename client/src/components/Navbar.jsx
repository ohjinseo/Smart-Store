import styled from "styled-components";
import {Badge} from '@material-ui/core'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'

const Container = styled.div `
  
  
  height:80px;
`
const Wrapper = styled.div `
  padding:20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`
const Left = styled.div `
flex:1;
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.h1 `
  font-family: 'Urbanist', sans-serif;
  font-size: 26px;
  font-weight: 300;

`

const Center = styled.div `
  flex:5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Menu = styled.ul `

  list-style:none;
  margin:0;
  padding:0;
  display: flex;
`

const MenuItem = styled.li `
  font-family: 'Urbanist', sans-serif;
  margin:0 30px;
  font-size: 18px;
  font-weight: 300;
`
const Right = styled.div `
 flex:1;
 display: flex;
 align-items: center;
 justify-content: center;
`


const BadgeItem = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  
`

const UserProfile = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserProfileImg = styled.img `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border:2px solid gray;
  object-fit:cover;
`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        SMART-STORE
                    </Logo>
                </Left>
                <Center>
                    <Menu>
                        <MenuItem>NEWEST</MenuItem>
                        <MenuItem>MEN</MenuItem>
                        <MenuItem>WOMEN</MenuItem>
                        <MenuItem>PRODUCT</MenuItem>
                        <MenuItem>SHOPPING BAG</MenuItem>
                    </Menu>
                </Center>
                <Right>
                    
                    <BadgeItem>

                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlined color="action"/>
                        </Badge>
                    </BadgeItem>

                    <UserProfile>
                      <UserProfileImg src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                    </UserProfile>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
