import styled from "@emotion/styled";
import {
  accentColor,
  accentColorLight,
  breakpointMobile,
  transitionDuration,
} from "../constants";

interface IButtonProps {
  fluid?: boolean;
}

export const Button = styled.button<IButtonProps>`
  display: inline-block;

  padding: 0.5rem 3rem;

  border-radius: 5px;
  border: 2px solid ${accentColor};

  color: #fff;
  background-color: ${accentColor};

  font-size: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  transition-property: background-color, color, border-color;
  transition-duration: ${transitionDuration};

  cursor: pointer;

  &:hover {
    background-color: ${accentColorLight};
    border-color: ${accentColorLight};
  }

  ${(props) =>
    props.fluid &&
    `
      width: 100%;
    `}

  @media screen and (max-width: ${breakpointMobile}) {
    width: 100%;
  }
`;
