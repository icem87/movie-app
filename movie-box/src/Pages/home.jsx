import React from "react";
import "../App.css";
import "antd/dist/antd.css";

import Genre from "../components/Genre";
import CardMovie from "../components/CardMovie";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <Carousel />
      <Genre />
      <CardMovie />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
