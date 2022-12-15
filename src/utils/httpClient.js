const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path).then((result) => result.json());
}
