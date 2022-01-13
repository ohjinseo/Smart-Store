import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import {useState} from 'react';
import styled from 'styled-components';
import {sliderItems} from '../dummy';

const Container = styled.div `
  width:100%;
  height:80vh;
  display: flex;
  overflow:hidden;
  position:relative;
  margin-bottom: 20px;
`;

const Arrow = styled.div `
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  top: 0;
  bottom: 0;
  margin:auto;
  left:${props => props.direction === "left" && "30px"};
  right:${props => props.direction === "right" && "30px"};
  cursor:pointer;
  opacity:0.5;
  z-index:1;
`

const Wrapper = styled.div `
  display: flex;
  height:100%;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: 1s ease;
`;

const Slide = styled.div `
  width:100vw;
  height:80vh;
  display: flex;
  background-color: ${props=>props.bgColor};
  
`;

const Left = styled.div `
  flex:2;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  position:relative;
`;

const TextBox = styled.div `
  position:absolute;
  left:280px;
`;

const Collections = styled.span `
  font-family: 'Urbanist', sans-serif;
  font-size: 20px;
  font-weight: 200;
  color:gray;
`;

const Title = styled.h1 `
  font-family: 'Urbanist', sans-serif;
  font-weight: 500;
  font-size: 52px;;
  margin:20px 0;
`;

const Button = styled.button `
  border:none;
  font-family: 'Urbanist', sans-serif;
  padding:10px 20px;
  background-color:#1A1B25;
  color:white;
  cursor:pointer;
  font-size:18px;
  font-weight: 200;
`;

const Right = styled.div `
  flex:1.3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Image = styled.img `
object-fit:cover;
height:100%;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(
                slideIndex > 0
                    ? slideIndex - 1
                    : 2
            );
        } else {
            setSlideIndex(
                slideIndex < 2
                    ? slideIndex + 1
                    : 0
            );
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIos
                    style={{
                        fontSize: "40px"
                    }}/>
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map(item => (

                        <Slide key={item.id} bgColor={item.bgColor}>
                            < Left >
                                <TextBox>

                                    <Collections>{item.collection}</Collections>
                                    <Title>{item.title}</Title>
                                    <Button>SHOP NOW</Button>
                                </TextBox>

                            </Left>
                            <Right>
                                <Image src={item.img}/>
                            </Right>
                        </Slide>
                    ))
                }
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIos
                    style={{
                        fontSize: "40px"
                    }}/>
            </Arrow>
        </Container>
    )
}

export default Slider
