import styled from "styled-components";

interface ITabContainer {
  isSelected: boolean;
}

export const TabContainer = styled("div")<ITabContainer>`
  text-transform: capitalize;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7562d62f;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    `
    background: #285aef47;
    font-weight: bolder;    
  `}
`;
