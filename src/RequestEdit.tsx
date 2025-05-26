import { HeaderBar, Title } from './components/styles';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color:rgb(255, 255, 255);
`;
const Text = styled.h1`
    color: black;
    font-size: 2.8rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    white-space: nowrap;
    display: flex;
    align-items: center;
    `;



function RequestEdit() {
  return (
    <Container>
      <Text>Request an edit</Text>
    </Container>
  );
}


export default RequestEdit