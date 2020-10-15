import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies/";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + movieId + "/");
}

export function saveMovie(movie) {
  console.log(movie._id);
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    http.put(apiEndpoint + movie._id + "/", body);
  }
  http.post(apiEndpoint, movie);
}

export function deleteMovie(id) {
  http.delete(apiEndpoint + id);
}
