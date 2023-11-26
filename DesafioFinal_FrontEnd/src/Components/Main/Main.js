import { useState, useEffect } from "react";
import * as S from "../Style.js";
import axios from "axios";
import styled from "styled-components";
import Star from "../Assets/StarIcon.svg";
import Play from "../Assets/Play.png";
import Trailer from "../Assets/Trailer.png";

export default function Main() {
  const [Movies, setMovies] = useState([]);
  const [background, setBG] = useState([]);

  const InfoContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    padding-top: 25%;
    align-items: left;
    margin-left: 10%;
    text-align: left;
    letter-spacing: 0.17px;
    color: #f6f6f6;
    opacity: 1;
  `;
  const Title = styled.h2`
    display: flex;
    font-size: 3rem;
    color: white;
    letter-spacing: 0px;
  `;
  const Release = styled.h2`
    display: flex;
    font-size: 0.8rem;
  `;
  const Score = styled.h2`
    display: flex;
    font-size: 1.8rem;
    color: white;
    img {
      width: 2rem;
      margin-right: 0.8rem;
    }
  `;
  const Synopse = styled.h2`
    display: flex;
  `;
  const BtnContainer = styled.div`
    width: 32vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3%;
  `;
  const BtnPlay = styled.button`
    display: flex;
    width: 16vw;
    height: 5vh;
    color: white;
    background-color: #d53a00;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 21px;
    opacity: 1;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
    img {
      width: 5vh;
      height: 4.5vh;
    }
  `;
  const BtnTrailer = styled.button`
    display: flex;
    width: 12vw;
    height: 5vh;
    color: white;
    background-color: #717171;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 21px;
    opacity: 1;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
    img {
      width: 3vh;
      height: 2.5vh;
      margin-right: 2%;
    }
  `;

  useEffect(() => {
    getMovies();
  });

  const getMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=80f0ec8bc55bcf7e1a673aad5c9ef2f7&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
          };
        });
        setMovies(allApi);
        setBG((prevState) => (prevState = Movies.slice(0, 1)));
      });
  };

  return (
    <S.ContainerMain
      background={background.map((item) => item.poster)}
      id="Main"
    >
      {background.map((item) => (
        <InfoContainer>
          <Title>{item.title}</Title>
          <Release>{item.release_date}</Release>
          <Score>
            <img src={Star} alt="Star" />
            {item.vote_average}/10
          </Score>
          <Synopse>{item.overview}</Synopse>
          <BtnContainer>
            <BtnPlay>
              <img src={Play} alt="Play" />
              <h3>Assistir Agora</h3>
            </BtnPlay>
            <BtnTrailer>
              <img src={Trailer} alt="Trailer" />
              <h3>Trailer</h3>
            </BtnTrailer>
          </BtnContainer>
        </InfoContainer>
      ))}
    </S.ContainerMain>
  );
}
