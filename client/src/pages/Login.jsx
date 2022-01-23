import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import {loginUserAction} from '../redux/slices/users/userSlices';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Container = styled.div `
`;

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
  padding:200px 0;
`;

const Title = styled.h1 `
  margin-bottom: 30px;
  font-weight: 400;
`

const LoginForm = styled.form `
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Email = styled.input `
  margin-bottom: 30px;
  padding:10px;
`;

const Password = styled.input `
  margin-bottom: 30px;
  padding: 10px;
`;

const Button = styled.button `
  padding: 10px;
  background-color:black;
  color:white;
  border:none;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div `
position:absolute;
  color:red;
  left:0;
  right:0;
  text-align:center;
  bottom:180px;
`

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const res = useSelector(state => state.usersReducer);
    const {userAppErr, userAuth, userLoading, userServerErr} = res;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserAction({email, password}))
    }

    useEffect(() => {
        userAuth && navigate("/");
    }, [navigate, userAuth])

    return (
        <Container>
            <Topbar/>
            <Navbar/>
            <Wrapper>
                <Title>LOGIN</Title>
                <LoginForm>
                    <Email placeholder='Email' onChange={e => setEmail(e.target.value)}></Email>
                    <Password
                        placeholder='Password'
                        type="password"
                        onChange={e => setPassword(e.target.value)}></Password>
                    <Button onClick={handleSubmit}>{userLoading ? (
                      <Box
                        sx={{
                            display: 'flex',
                            justifyContent : 'center',
                            
                        }}>
                        <CircularProgress color="inherit" size="16px"/>
                    </Box>
                    ): "LOGIN"}</Button>
                    <ErrorMessage>{userAppErr}</ErrorMessage>
                </LoginForm>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Login
