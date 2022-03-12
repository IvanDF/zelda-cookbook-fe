import styled from "styled-components";
import { IBreakpoint } from "../../../hooks/useWindowSize";

export const SliderWrapper = styled.div<{
  device: IBreakpoint;
  hide?: boolean;
}>`
  display: grid;
  opacity: ${(p) => (p.hide ? "0" : "1")};
  grid-template-columns: ${(p) =>
    p.device === "DESKTOP" ? "repeat(5, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 15px;
  margin: 0 10px;
  ${({ device }) =>
    device !== "DESKTOP" && "overflow-x: auto; height: 90%; overflow-y: auto;"};
  transition: all 300ms ease;
`;
