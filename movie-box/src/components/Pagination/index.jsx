import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, getMovies } from "../../store/movies/moviesSlice";

function Pagination() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(1);
  const { movies, genres, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const items = [];

  const movie = movies && movies.totalPages;

  for (let i = 1; i <= movie; i++) {
    items.push(i);
    console.log(`${items}`);
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setItemOffset(selectedPage);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [itemOffset]);

  useEffect(() => {
    setTimeout(() => {
      setPageCount(Math.ceil(items.length / 1));
    }, 3500);
  }, [getMovies()]);

  return <ReactPaginate breakLabel="..." onPageChange={handlePageClick} pageCount={pageCount} activeClassName={"active"} className={"pagination"} />;
}

export default Pagination;
