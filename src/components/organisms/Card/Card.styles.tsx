import styled from "styled-components";

interface IStyledCard {
  color: string;
}

export const StyledCard = styled("div")<IStyledCard>`
  background: #ffffff7a;
  height: 250px;
  width: 200px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  box-shadow: 8px 8px 0px rgba(64, 89, 106, 0.525);

  & .color-card {
    position: absolute;
    width: 300px;
    height: 100px;
    transform: rotate(155deg) translateY(60px) translateX(60px);
    background: ${({ color }) => color};
    transition: 0.4s;
  }

  & .info-card {
    padding: 40px 20px 0px 20px;
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    text-align: center;
    & #card-logo {
      margin-bottom: 20px;
    }

    & .certificate-icon {
      background: red;
      height: 25px;
      border-radius: 10px;
      overflow: hidden;

      & img {
      }
    }
  }

  &:hover {
    & .color-card {
      transform: rotate(180deg);
      transition: 0.4s;
    }
  }
`;
