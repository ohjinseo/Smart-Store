import styled from "styled-components";
import {carData, categoryData} from '../dummy';
import CategoryBox from './CategoryBox';

const Container = styled.div `

`;
const Wrapper = styled.div `
  padding:0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const CategoryList = () => {
    return (
        <Container>
            <Wrapper>
                {carData.map((item, idx) => 
                (<CategoryBox key={idx} item={item}/>
                    ))}
            </Wrapper>
        </Container>
    )
}

export default CategoryList
