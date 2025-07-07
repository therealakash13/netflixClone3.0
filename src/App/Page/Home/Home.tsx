import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../Services/MovieFetch";
import type { Movie } from "../../Services/movies.type";
import Banner from "./Banner";

export default function HomePage() {
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setMovie(await fetchPopularMovies());
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return <>{movie.length > 1 && <Banner receivedData={movie[1]} />}</>;
}
