import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

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
`;


const Login = () => {
  return (
    <Container>
      <Topbar />
      <Navbar />
      <Wrapper>
          <Title>LOGIN</Title>
        <LoginForm>
          <Email placeholder='Email'></Email>
          <Password placeholder='Password' type="password"></Password>
          <Button>LOGIN</Button>
        </LoginForm>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Login
