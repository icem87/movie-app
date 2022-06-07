import React from "react";
import { useSelector } from "react-redux";
import Allmovies from "./Allmovies";
import Genres from "./Genres";

function CardMovie() {
  const { movies, genres } = useSelector((state) => state.movies);
  return <>{movies ? <Allmovies /> : <Genres />}</>;
}
export default CardMovie;
