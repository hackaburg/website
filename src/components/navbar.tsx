import styled from "@emotion/styled";
import * as React from "react";
import { useCallback, useState } from "react";
import {
  accentColor,
  breakpointTablet,
  transitionDuration,
} from "../constants";
import { useIncrementedID } from "../hooks/use-incremented-id";
import { useRaisedNavbar } from "../hooks/use-raised-navbar";
import { useScrollSpyActiveElementName } from "../hooks/use-scrollspy";
import { Container } from "./container";
import { Burger } from "./icons/burger";
import { Link } from "./link";

interface INavProps {
  raised: boolean;
}

const Nav = styled.nav<INavProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(10px);

  transition-property: background-color;
  transition-duration: ${transitionDuration};

  ${(props) =>
    props.raised &&
    `
    background-color: rgba(0, 0, 0, 0.75);
  `}

  @media screen and (max-width: ${breakpointTablet}) {
    background-color: black;
  }
`;

const ToggleInput = styled.input`
  display: none;
`;

const ToggleButton = styled.label`
  display: none;

  @media screen and (max-width: ${breakpointTablet}) {
    display: inline-block;
    width: 4rem;
    padding: 1rem;
    cursor: pointer;
    float: right;
  }
`;

const Brand = styled.div`
  display: inline-block;
  padding: 1rem;
`;

const Menu = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: ${breakpointTablet}) {
    display: block;
    height: 0;
    overflow: hidden;

    transition-property: height;
    transition-duration: ${transitionDuration};

    ${ToggleInput}:checked ~ & {
      height: 100vh;
    }
  }
`;

const Item = styled.li`
  display: inline-block;

  @media screen and (max-width: ${breakpointTablet}) {
    display: block;
    text-align: right;
  }
`;

interface IClickableAreaProps {
  active: boolean;
}

const ClickableArea = styled.div<IClickableAreaProps>`
  display: block;
  background-color: transparent;
  padding: 1rem;

  ${(props) =>
    props.active &&
    `
      background-color: ${accentColor};
    `}
`;

interface INavbarItem {
  label: string;
  marker: string;
}

interface INavbarProps {
  items: ReadonlyArray<INavbarItem>;
}

export const Navbar = ({ items }: INavbarProps) => {
  const activeItem = useScrollSpyActiveElementName();
  const isRaised = useRaisedNavbar();
  const id = useIncrementedID();
  const navbarID = `navbar-toggle-${id}`;

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const hideMenu = useCallback(() => setIsMenuVisible(false), []);
  const updateMenuVisibility = useCallback(
    (event) => setIsMenuVisible(event.target.checked),
    [],
  );

  const renderedItems = items.map((item) => (
    <Item key={item.marker}>
      <Link label={item.label} to={`#${item.marker}`} underline={false}>
        <ClickableArea onClick={hideMenu} active={activeItem === item.marker}>
          {item.label}
        </ClickableArea>
      </Link>
    </Item>
  ));

  return (
    <Nav raised={isRaised}>
      <Container>
        <Brand>
          <Link label="Home" to="../index.html" underline={false}>
            Hackaburg 2020
          </Link>
        </Brand>

        <ToggleButton htmlFor={navbarID}>
          <Burger />
        </ToggleButton>
        <ToggleInput
          checked={isMenuVisible}
          onChange={updateMenuVisibility}
          type="checkbox"
          id={navbarID}
        />

        <Menu>{renderedItems}</Menu>
      </Container>
    </Nav>
  );
};
