import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../store/movies/moviesSlice";

function Genres() {
  const dispatch = useDispatch();
  const { genres, loading } = useSelector((state) => state.movies);

  const genre = genres.docs;

  return (
    <div className=" mx-16 my-12">
      <div class="flex flex-wrap justify-start">
        {loading || !genre ? (
          <div class="flex items-center justify-center space-x-2 mx-auto my-20 animate-pulse">
            <div class="w-8 h-8 bg-rose-500 rounded-full"></div>
            <div class="w-8 h-8 bg-rose-600 rounded-full"></div>
            <div class="w-8 h-8 bg-rose-700 rounded-full"></div>
          </div>
        ) : (
          genre.length > 0 &&
          genre.map((item) => (
            <div class="block rounded-lg bg-white w-1/5 px-4 mt-5 hover:cursor-pointer hover:opacity-80 duration-500">
              <img src={item.poster} alt="dunkirk" className="object-fit rounded-lg" />
              <p class="text-gray-900 font-semibold text-xl my-2 truncate">{item.title}</p>
              <p class="text-gray-400 text-bold mb-4 truncate">{item.genres && item.genres.map((genre) => genre.genre + ", ")}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Genres;
