import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import {registerUserAction} from '../redux/slices/users/userSlices';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Container = styled.div `
`;

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:150px 0;
  position:relative;
`;

const Title = styled.h1 `
  margin-bottom: 30px;
  font-weight: 400;
`

const RegisterForm = styled.form `
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Username = styled.input `
  margin-bottom: 30px;
  padding:10px;
`;

const Email = styled.input `
  margin-bottom: 30px;
  padding:10px;
`;

const Password = styled.input `
  margin-bottom: 30px;
  padding: 10px;
`;

const CheckPassword = styled.input `
  margin-bottom: 30px;
  padding:10px;
`;

const Button = styled.button `
  padding: 10px;
  background-color:black;
  color:white;
  border:none;
`;

const ErrorMessage = styled.div `
position:absolute;
  color:red;
  left:0;
  right:0;
  text-align:center;
  bottom:110px;
`

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const res = useSelector(state => state.usersReducer);
    const {userAppErr, userLoading, userServerErr, isRegistered} = res;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUserAction({name:username, email, password, checkPassword}))
    }

    useEffect(()=>{
      if(isRegistered){
        window.confirm("회원가입이 완료되었습니다.\n다시 로그인을 진행해주세요")
        navigate("/login");
      }
    }, [isRegistered, navigate])

    return (
        <Container>
            <Topbar/>
            <Navbar/>
            <Wrapper>
                <Title>REGISTER</Title>
                <RegisterForm>
                    <Username placeholder='Username' onChange={e => setUsername(e.target.value)}></Username>
                    <Email placeholder='Email' onChange={e => setEmail(e.target.value)}></Email>
                    <Password placeholder='Password' type="password" onChange={e => setPassword(e.target.value)}></Password>
                    <CheckPassword placeholder='Password' type="password" onChange={e => setCheckPassword(e.target.value)}></CheckPassword>
                    <Button onClick={handleSubmit}>{
                            userLoading
                                ? (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                        <CircularProgress color="inherit" size="16px"/>
                                    </Box>
                                )
                                : "REGISTER"
                        }</Button>
                        <ErrorMessage>{userAppErr}</ErrorMessage>
                </RegisterForm>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Register