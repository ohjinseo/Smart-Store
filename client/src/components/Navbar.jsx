import styled from "styled-components";
import {Badge} from '@material-ui/core'
import {PersonOutlineOutlined, ShoppingCartOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserCartAction } from '../redux/slices/carts/cartSlice';

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
justify-content: flex-end;
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
  margin-right: 20px;

`

const Icon = styled.div `
  display: flex;
  align-items: center;
  border-radius: 10px;
border:2px solid gray;
`;

const Navbar = () => { 
  const dispatch = useDispatch();
  const {total} = useSelector(state => state.cartsReducer);

  useEffect(() => {
    dispatch(getUserCartAction());
  }, [dispatch])
  
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "inherit"
                        }}>

                        <Logo>
                            SMART-STORE
                        </Logo>
                    </Link>
                </Left>
                <Center>
                    <Menu>
                        <MenuItem>NEWEST</MenuItem>
                        <MenuItem>MODELS</MenuItem>
                        <MenuItem>PRODUCT</MenuItem>
                        <MenuItem>SERVICES</MenuItem>
                        <MenuItem>DISCOVER</MenuItem>
                    </Menu>
                </Center>
                <Right>
                    <Link to="/cart" style={{textDecoration:"none", color:"inherit"}}>

                    <BadgeItem>
                        <Badge badgeContent={total} color="primary">
                            <ShoppingCartOutlined color="action"/>
                        </Badge>
                    </BadgeItem>
                    </Link>

                    <Icon>
                        <PersonOutlineOutlined color="action"/>
                    </Icon>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
