import { useEffect, useState } from "react";
import { fetchBannerMovie } from "../../Services/MovieFetch";
import type { Movie } from "../../Services/movies.type";
import Banner from "./Banner";

export default function HomePage() {
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setMovie(await fetchBannerMovie());
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return <>{movie.length > 1 && <Banner receivedData={movie[0]} />}</>;
}
