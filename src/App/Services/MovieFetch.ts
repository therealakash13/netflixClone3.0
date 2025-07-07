import axios from "axios";
import type { Movie } from "./movies.type";

// const options = {
//   params: {
//     include_adults: "false",
//     includE_videos: "true",
//     language: "en-US",
//     sort_by: "popularity.desc",

//     region: "IN",
//   },
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgzYWNlOTUzYTE3ZTE0MDEyYjJmMzk3ZTk5OTk0OSIsIm5iZiI6MTcxODI2OTY0OS40MzEsInN1YiI6IjY2NmFiNmQxNDgzN2NlYmFhZWE3NTAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgTgJ5BwuDCF75KgXJqiBapsAgrXdK8tGGnLUA-YhAI",
//   },
// };

const options = {
  params: {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgzYWNlOTUzYTE3ZTE0MDEyYjJmMzk3ZTk5OTk0OSIsIm5iZiI6MTcxODI2OTY0OS40MzEsInN1YiI6IjY2NmFiNmQxNDgzN2NlYmFhZWE3NTAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgTgJ5BwuDCF75KgXJqiBapsAgrXdK8tGGnLUA-YhAI",
  },
};

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  try {
    console.log("Hello from MovieFetch");

    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
