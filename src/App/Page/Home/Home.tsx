import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../Services/MovieFetch";
import type { Movie } from "../../Services/movies.type";

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

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
