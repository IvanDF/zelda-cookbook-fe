import styled from "styled-components";
import { BottomBar } from "../components/BottomBar/BottomBar";
import { TopBar } from "../components/topBar/TopBar";
import { GlobalStyle } from "../styles/globalStyle/GlobalStyle";
import { Bag } from "./sections/Bag";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <TopBar />
      <Bag />
      <BottomBar />
    </Wrapper>
  );
}

export default App;
