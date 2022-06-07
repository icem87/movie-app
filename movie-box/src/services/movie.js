import axios from "axios";

const baseUrl = "http://notflixtv.herokuapp.com/api/v1";

export const fetchAllMovies = (page) => {
  return axios
    .get(`${baseUrl}/movies?page=${page}`)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const fetchGenre = (genre, page) => {
  return axios
    .get(`${baseUrl}/movies/genres`)
    .then((result) => {
      console.log("ini " + genre + " ini page " + JSON.stringify(page));
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const fetchAllGenre = () => {
  return axios
    .get(`${baseUrl}/movies/genres`)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
