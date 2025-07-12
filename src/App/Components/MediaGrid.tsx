import React from "react";

interface MediaItem {
  id: number;
  poster_path: string;
  original_title?: string;
  title?: string;
  original_name?: string;
  name?: string;
}

interface Props {
  movies?: MediaItem[];
  tv?: MediaItem[];
  navigateToWatch?: (id: number, type: "movie" | "tv") => void;
}

const MediaGrid: React.FC<Props> = ({ movies, tv }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {/* Movies Section */}
      {movies?.map((movie) => (
        <div
          key={`movie-${movie.id}`} // Better to use movie.id if available
          className="group flex flex-col items-center transition-transform duration-300 hover:scale-105 animate-fadeInUp"
        >
          <div className="relative w-full overflow-hidden rounded-xl aspect-[2/3] shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title || "Movie poster"}
              className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90 cursor-pointer"
              loading="lazy" // Better performance
            />
          </div>
          <div className="w-full mt-2 text-center">
            <span className="inline-block px-2 py-1 text-sm font-medium text-text bg-accent rounded-md md:text-base line-clamp-1 cursor-pointer">
              {movie.title}
            </span>
          </div>
        </div>
      ))}

      {/* TV Shows Section */}
      {tv?.map((show) => (
        <div
          key={`tv-${show.id}`}
          className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-full overflow-hidden rounded-xl aspect-[2/3] shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.original_name || "TV show poster"}
              className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
              loading="lazy"
            />
          </div>
          <div className="w-full mt-2 text-center">
            <span className="inline-block px-2 py-1 text-sm font-medium text-text bg-accent rounded-md md:text-base line-clamp-1">
              {show.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
