import styled from "styled-components";
import FetchDemo from "./provaFetch/FetchDemo";

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
      <FetchDemo />
    </Wrapper>
  );
}

export default App;
