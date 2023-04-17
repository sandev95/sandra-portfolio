import styled from "styled-components";
import { ImageSize } from "../../../utils/constants";

interface IImage {
  url: JSX.Element;
  size?: keyof typeof ImageSize;
  hoverAnimation?: boolean;
}

export const Image = styled.img.attrs(({ url }: IImage) => ({
  src: url,
}))<IImage>`
  width: ${({ size }) => {
    return size ? ImageSize[size] : ImageSize.m;
  }};
  ${({ hoverAnimation }) =>
    hoverAnimation &&
    `
    &:hover {
      transform: scale(1.2);
    }
    `}
`;
