import styled, { ThemeProps } from "styled-components";
import { FontSize } from "../../../utils/constants";

interface ITypography {
  letterSpacing?: string;
  fontSize?: keyof typeof FontSize;
  fontWeight?: string;
  position?: string;
}

export const Typography = styled("span")<ITypography>`
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-size: ${({ fontSize }) =>
    fontSize ? FontSize[fontSize] : FontSize.medium};
  font-weight: ${({ fontWeight }) => fontWeight && "bolder"};
  position: ${({ position }) => position};
`;
