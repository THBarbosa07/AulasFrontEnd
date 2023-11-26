import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  height: 15vh;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`;
const NavUl = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;
const NavItem = styled.li`
  color: white;
  font-size: 1.3rem;
  transition-duration: 800ms;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <NavList />
    </NavContainer>
  );
}

const NavList = () => {
  return (
    <NavUl>
      <NavItem>Popular</NavItem>
      <NavItem>Drama</NavItem>
      <NavItem>Ação</NavItem>
      <NavItem>Aventura</NavItem>
      <NavItem>Comédia</NavItem>
      <NavItem>Crime</NavItem>
      <NavItem>Fantásia</NavItem>
      <NavItem>Família</NavItem>
    </NavUl>
  );
};
