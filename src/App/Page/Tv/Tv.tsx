import { useEffect, useState } from "react";
import { fetchTvShows } from "../../Services/MovieFetch";
import MediaGrid from "../../Components/MediaGrid";
import type { Tv } from "../../Services/tv.type";

export default function TvPage() {
  const [page, setPage] = useState(1);
  const [tv, setTv] = useState<Tv[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTv(await fetchTvShows(page));
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 w-full h-full flex flex-col">
          {/* Grid Scroll Container */}
          <div className="flex-1 w-full overflow-y-auto overflow-x-hidden">
            <div className="mx-auto max-w-screen-2xl">
              <MediaGrid tv={tv} />
            </div>
          </div>

          {/* Pagination Controls - Fixed at bottom */}
          <div className="h-12 flex flex-row justify-between items-center mt-3 px-3 sticky bottom-0 bg-background backdrop-blur-sm py-2 z-10">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="text-text text-lg md:text-xl rounded-lg hover:opacity-80 bg-accent px-3 py-1 md:px-4 md:py-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              &laquo; Previous
            </button>

            <span className="text-text text-base md:text-lg mx-2">
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
