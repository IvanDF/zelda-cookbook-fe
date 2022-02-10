import styled from "styled-components";
import { BottomBar } from "../components/BottomBar/BottomBar";
import { TopBar } from "../components/topBar/TopBar";
import { TextType } from "../components/ui/text/IText";
import Text from "../components/ui/text/Text";
import { GlobalStyle } from "../styles/globalStyle/GlobalStyle";

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
      <Text color="red" textType={TextType.HEADING} text="CIAO" />
      <BottomBar />
    </Wrapper>
  );
}

export default App;
