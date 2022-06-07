import React from "react";
import PropTypes from "prop-types";
import Login from "../Login";

function Header({ bgImage, movieTitle, movieDesc }) {
  return (
    <div className={`h-full w-full  bg-no-repeat bg-cover ${bgImage}`}>
      <div className="container pt-8 px-16 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between text-white ">
            <img className="h-full" src="/logo.svg" alt="logo" />
          </div>
          <div class="relative flex w-2/4 pl-24">
            <span class="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 ">
              <img src="/fi_search.svg" alt="icon search" />
            </span>
            <input type="text" placeholder="What do you want to watch?" class="px-3 py-3 placeholder-slate-300 text-white relative bg-white bg-opacity-10 rounded text-sm  focus:outline-none focus:font-semibold focus:ring w-full pl-10" />
          </div>
          {/* Login */}
          <Login />
        </div>
        {/* Movie Slide Description */}
        <div className="w-1/4 h-full mt-28">
          <div className=" text-left">
            <h3 className="text-white font-semibold leading-snug text-5xl">{movieTitle}</h3>
            <p className="text-white text-sm font-thin mt-8">{movieDesc}</p>
            <button className="bg-rose-700 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center mt-6">
              <img src="/fi_play.svg" alt="play icon" />
              <span className="ml-2">WATCH TRAILER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  bgImage: PropTypes.string,
  movieTitle: PropTypes.string,
  movieDesc: PropTypes.string,
};

export default Header;
