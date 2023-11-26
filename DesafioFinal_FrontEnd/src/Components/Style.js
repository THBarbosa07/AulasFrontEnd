import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  border: solid;
  display: flex;
  align-items: center;
  h2 {
    font-size: 1.2rem;
    text-align: center;
    color: white;
  }
  img {
    width: 2rem;
    cursor: pointer;
  }
`;

export const Caixa = styled.input`
  display: ${(props) => props.show};
`;

export const BoxFilms = styled.section`
  width: 22%;
  text-align: left;
  margin-top: 3%;
  img {
    width: 80%;
    :hover {
      cursor: pointer;
    }
  }
  h3 {
    margin-top: 2%;
    font-size: 1.5rem;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
  h4 {
    font-size: 0.9rem;
    color: white;
    opacity: 0.7;
  }
`;

export const ContainerMain = styled.main`
  background-image: url(${(props) => props.background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  display: transparent;
`;
