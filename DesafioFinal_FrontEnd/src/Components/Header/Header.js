import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../Assets/Logo.svg";
import Search from "../Assets/SearchIcon.svg";

const ContainerHeader = styled.header`
  display: flex;
  opacity: 1;
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  z-index: 1;
  align-items: center;
  justify-content: space-evenly;

  img {
    :hover {
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    width: 16vw;
    height: 8vh;
    display: flex;
    align-items: center;
    margin-left: 3%;
  }
  li {
    display: flex;
    width: 12vw;
    height: 4.8vh;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
      background: #a1a1a1 0% 0% no-repeat padding-box;
      box-shadow: 2px 5px 8px #0000005c;
      border-radius: 20px;
    }
    a {
      color: white;
      font-size: 1.2rem;
    }
  }
`;

const LogoIcon = styled.img`
  display: flex;
  width: 10vw;
  height: 10vh;
  margin-left: 1.5%;
`;
const FirstNav = styled.nav`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-left: 30%;
`;
const SecondNav = styled.nav`
  display: flex;
  width: 50%;
  margin-left: 10%;
`;

class Header extends Component {
  render() {
    return (
      <>
        <ContainerHeader>
          <LogoIcon src={Logo} alt="Logo" />
          <FirstNav>
            <ul>
              <li>
                <a href="#Series">Séries</a>
              </li>
              <li>
                <a href="#Movies">Filmes</a>
              </li>
            </ul>
          </FirstNav>
          <SecondNav>
            <img src={Search} alt="Search" />
            <ul>
              <li>
                <a href="#Filter">Filtrar</a>
              </li>
              <li>
                <a href="#Login">Login</a>
              </li>
            </ul>
          </SecondNav>
        </ContainerHeader>
      </>
    );
  }
}
export default Header;
