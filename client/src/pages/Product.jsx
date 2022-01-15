import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

const Container = styled.div``;

const Product = () => {
  return (
    <Container>
      <Topbar />
      <Navbar />
      <Footer />
    </Container>
  )
}

export default Product
