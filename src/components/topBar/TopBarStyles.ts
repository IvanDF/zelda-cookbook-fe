import styled from "styled-components";
import { Container } from "../../styles/globalStyle/GlobalStyle";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }
`;

export const LeftWrapper = styled.div``;
export const MenuWrapper = styled.div``;
export const RightWrapper = styled.div``;
