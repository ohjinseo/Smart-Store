import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { login } from '../redux/authApiCall';

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:200px 0;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 400;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Email = styled.input`
  margin-bottom: 30px;
  padding:10px;
`;

const Password = styled.input`
  margin-bottom: 30px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color:black;
  color:white;
  border:none;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.span`
  color:red;
  display: flex;
  justify-content: center;
`


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isLoading, error, errorMessage] = useSelector(state =>state);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, {email, password});
  }

  return (
    <Container>
      <Topbar />
      <Navbar />
      <Wrapper>
          <Title>LOGIN</Title>
        <LoginForm>
          <Email placeholder='Email' onChange={e=>setEmail(e.target.value)}></Email>
          <Password placeholder='Password' type="password" onChange={e=>setPassword(e.target.value)}></Password>
          <Button onClick={handleSubmit}>LOGIN</Button>
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </LoginForm>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Login
