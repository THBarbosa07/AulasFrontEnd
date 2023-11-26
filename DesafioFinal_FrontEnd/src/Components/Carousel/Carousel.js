import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
document.body.style.backgroundColor = "black";

const CarouselContainer = styled.div`
  color: white;
  text-align: center;
`;

export default function CarouselComponent() {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    getApi();
  }, [Movies]);

  const getApi = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=80f0ec8bc55bcf7e1a673aad5c9ef2f7&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const Api = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          };
        });
        setMovies(Api);
      });
  };
  return (
    <Carousel
      enableAutoPlay
      autoPlaySpeed={8000}
      itemsToScroll={4}
      itemsToShow={4}
      itemPadding={[50, 10]}
    >
      {Movies.map((item) => (
        <CarouselContainer>
          <img src={item.image} alt={item.title} style={{ width: "85%" }} />
          <h2>{item.title}</h2>
        </CarouselContainer>
      ))}
    </Carousel>
  );
}
