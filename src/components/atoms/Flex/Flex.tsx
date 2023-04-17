import styled from "styled-components";

interface IFlex {
  container?: boolean;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;
  fillContainer?: boolean;
  centerContainer?: boolean;
  flexWrap?: string;
  flexBasis?: string;
}

export const Flex = styled("div")<IFlex>`
  display: ${({ container }) => container && "flex"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-basis: ${({ flexBasis }) => flexBasis};
  ${({ fillContainer }) =>
    fillContainer &&
    `
    width: 100%;
    height: 100%;
  `}
  ${({ centerContainer }) =>
    centerContainer &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
