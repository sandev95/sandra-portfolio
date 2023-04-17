import styled from "styled-components";

interface IBox {
  maxWidth?: string;
  padding?: string;
  margin?: string;
  marginBottom?: string;
  marginTop?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  fillContainer?: boolean;
  zIndex?: string;
}

export const Box = styled("div")<IBox>`
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex};
  ${({ fillContainer }) =>
    fillContainer &&
    `
  width: 100%;
  height: 100%;
  `}
`;
