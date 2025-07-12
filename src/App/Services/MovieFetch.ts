import axios from "axios";
import type { Movie } from "./movies.type";
import type { Tv } from "./tv.type";

const page: number = 1;

const options = {
  params: {
    include_adult: false,
    include_video: false,
    language: "en-US",
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgzYWNlOTUzYTE3ZTE0MDEyYjJmMzk3ZTk5OTk0OSIsIm5iZiI6MTcxODI2OTY0OS40MzEsInN1YiI6IjY2NmFiNmQxNDgzN2NlYmFhZWE3NTAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgTgJ5BwuDCF75KgXJqiBapsAgrXdK8tGGnLUA-YhAI",
  },
};

export const fetchBannerMovie = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?page=${page}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchMovies = async (page: number): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=${page}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchTvShows = async (page: number): Promise<Tv[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?page=${page}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
};

export const fetchNowPlaying = async (page: number): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?page=${page}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchPopularMovies = async (page: number): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=${page}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchUpcoming = async (page: number): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const search = async (id: string): Promise<Partial<Movie[]>> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${id}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
