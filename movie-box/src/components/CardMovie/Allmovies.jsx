import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/movies/moviesSlice";

function Allmovies() {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  const response = movies.docs;

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className=" mx-16 my-12">
      <div class="flex flex-wrap justify-start">
        {loading || !response ? (
          <div class="flex items-center justify-center space-x-2 mx-auto my-20 animate-pulse">
            <div class="w-8 h-8 bg-rose-500 rounded-full"></div>
            <div class="w-8 h-8 bg-rose-600 rounded-full"></div>
            <div class="w-8 h-8 bg-rose-700 rounded-full"></div>
          </div>
        ) : (
          response.length > 0 &&
          response.map(
            (item) => (
              console.log(item),
              (
                <div class="block rounded-lg bg-white w-1/5 px-4 mt-5 hover:cursor-pointer hover:opacity-80 duration-500">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster}`} alt={item.title} className="object-fit rounded-lg" />
                  <p class="text-gray-900 font-semibold text-xl my-2 truncate">{item.title}</p>
                  <p class="text-gray-400 text-bold mb-4 truncate">{item.genres && item.genres.map((genre) => genre + ", ")}</p>
                </div>
              )
            )
          )
        )}
      </div>
    </div>
  );
}
export default Allmovies;
