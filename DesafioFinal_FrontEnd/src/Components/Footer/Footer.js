import React, { Component } from "react";
import styled from "styled-components";
import Left from "../Assets/LeftArrow.svg";
import Right from "../Assets/RightArrow.svg";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 10vh;
  color: white;
  margin-left: 35%;

  img {
    display: flex;
    :hover {
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  li {
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    border: solid gray;
    border-radius: 100px;
    :hover {
      cursor: pointer;
    }
  }
`;
class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer>
          <img src={Left} alt="Left Arrow" />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <img src={Right} alt="Right Arrow" />
        </FooterContainer>
      </>
    );
  }
}
export default Footer;
