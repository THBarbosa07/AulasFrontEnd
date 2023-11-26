import { useState, useEffect } from "react";
import * as S from "../Style.js";
import axios from "axios";
import Search from "../Assets/SearchIcon.svg";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState(false);

  useEffect(() => {
    getMovies();
    filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, filtered, movies]);

  const getMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=80f0ec8bc55bcf7e1a673aad5c9ef2f7&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          };
        });
        setMovies(allApi);
      });
  };

  const filter = () => {
    const moviesFiltered = movies.filter((item) => {
      if (item.title.toLowerCase().includes(input.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setFiltered(moviesFiltered);
  };

  return (
    <S.Container id="Movies">
      <S.BoxTitle>
        <div>
          <img
            onClick={() => {
              setMode(!mode);
            }}
            src={Search}
            alt="Search Icon"
          />
          <S.Caixa
            show={mode === false ? "none" : "initial"}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </S.BoxTitle>
      {filtered.map((item, id) => (
        <S.BoxFilms key={id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <h4>{item.release_date}</h4>
        </S.BoxFilms>
      ))}
    </S.Container>
  );
}
