import { useInfiniteQuery } from "@tanstack/react-query";
import {get} from "../utils/httpClient";

export function useMovies(search, type) {
    const result = useInfiniteQuery(
      [type, search],
      ({ pageParam = 1 }) => {
        const searchUrl = search
          ? `/search/${type}?api_key=2508dee2967eb61f3c6a05ef9df2826a&query=${search}&page=${pageParam}`
          : `/discover/${type}?api_key=2508dee2967eb61f3c6a05ef9df2826a&page=${pageParam}`;
        return get(searchUrl);
      },
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.page === lastPage.total_pages) return false;
          return lastPage.page + 1;
        },
      }
    );
  
    const movies =
      result.data?.pages.reduce(
        (prevMovies, page) => prevMovies.concat(page.results),
        []
      ) ?? [];
  
    return { ...result, movies };
  }
  