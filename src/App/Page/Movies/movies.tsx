import { useEffect, useState } from "react";
import type { Movie } from "../../Services/movies.type";
import { fetchMovies } from "../../Services/MovieFetch";
import MediaGrid from "./MediaGrid";

export default function MoviesPage() {
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setMovie(await fetchMovies(page));
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 w-full h-full">
          {/* Main Content Area */}
          <div className="w-full p-2 overflow-y-auto overflow-x-hidden">
            <div className="mx-auto max-w-screen-2xl max-h-fit">
              {/* fix the overflow of the mediagrid adjust hight i think */}
              <MediaGrid movies={movie} />
            </div>
          </div>

          {/* Pagination Controls - Fixed at bottom */}
          <div className="h-12 flex flex-row justify-between items-center mt-3 px-3 sticky bottom-0 bg-background backdrop-blur-sm py-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="text-text text-lg md:text-xl rounded-lg hover:opacity-80 bg-accent px-3 py-1 md:px-4 md:py-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              &laquo; Previous
            </button>

            <span className="text-white text-base md:text-lg mx-2">
              Page {page}
            </span>

            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="text-text text-lg md:text-xl rounded-lg hover:opacity-80 bg-accent px-3 py-1 md:px-4 md:py-2 cursor-pointer disabled:cursor-not-allowed"
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
