import styled from "styled-components";
import Demo from "./provaFetch/Demo";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background: #000;
  color: #fff;
`;

function App() {
  return (
    <Wrapper>
      <Demo />
    </Wrapper>
  );
}

export default App;
