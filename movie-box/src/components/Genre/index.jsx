import ReactPaginate from "react-paginate";
import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getGenres, getMovies } from "../../store/movies/moviesSlice";
import styles from "./Genre.module.css";

function Genre() {
  const dispatch = useDispatch();
  const { allGenres, genres } = useSelector((state) => state.movies);
  const [selected, setSelected] = useState("crime");

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  // Pagination
  const [pageCount, setPageCount] = useState(0);
  const items = [];

  const genre = genres && genres.totalPages;
  const [payload, setPayload] = useState({ genre: "", page: 1 });

  for (let i = 1; i <= genre; i++) {
    items.push(i);
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const selectedPage = payload.page + 1;
    setPayload({ ...payload, page: selectedPage });
    // setItemOffset(selectedPage);
    dispatch(getGenres(payload));
  };

  useEffect(() => {
    dispatch(getGenres(payload));
    console.log(`${JSON.stringify(payload)}`);
  }, [payload]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPageCount(Math.ceil(items.length / 1));
  //   }, 3500);
  // }, [getGenres()]);

  useEffect(() => {
    setPageCount(Math.ceil(items.length / 1));
  }, [getGenres()]);

  //end Pagination

  return (
    <>
      <div className="mx-16 mt-8">
        <p className="text-3xl font-bold text-left">Browse by category</p>
        <div className={styles.genres}>
          {allGenres &&
            allGenres.map((genre) => (
              <button
                // key={genre._id}
                onClick={() => setSelected(genre)}
                // to={`/${genre}`}
                className={classnames(styles.genre, {
                  [styles.selected]: selected === genre,
                })}
              >
                {genre}
              </button>
            ))}
        </div>
      </div>
      {/* <ReactPaginate breakLabel="..." nextLabel="next >" onPageChange={handlePageClick} pageCount={pageCount} previousLabel="<p previous" activeClassName={"active"} className={"pagination"} /> */}
    </>
  );
}

export default Genre;
