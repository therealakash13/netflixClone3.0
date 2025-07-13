import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {/* Movies Section */}
      {movies?.map((movie, index) => (
        <motion.div
          key={`movie-${movie.id}`} // Better to use movie.id if available
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group flex flex-col items-center hover:scale-105 transition-transform duration-500"
        >
          <div className="relative w-full overflow-hidden rounded-xl aspect-[2/3] shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title || "Movie poster"}
              className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90 cursor-pointer"
              onClick={() => {
                navigate(`/details/movie/${movie.id}`);
              }}
              loading="lazy" // Better performance
            />
          </div>
          <div className="w-full mt-2 text-center">
            <span
              onClick={() => {
                navigate(`/details/movie/${movie.id}`);
              }}
              className="inline-block px-2 py-1 text-sm font-medium text-text bg-accent rounded-md md:text-base line-clamp-1 cursor-pointer"
            >
              {movie.title}
            </span>
          </div>
        </motion.div>
      ))}

      {/* TV Shows Section */}
      {tv?.map((show, index) => (
        <motion.div
          key={`tv-${show.id}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group flex flex-col items-center hover:scale-105 transition-transform duration-500"
        >
          <div className="relative w-full overflow-hidden rounded-xl aspect-[2/3] shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.original_name || "TV show poster"}
              className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
              onClick={() => {
                navigate(`/details/tv/${show.id}`);
              }}
              loading="lazy"
            />
          </div>
          <div className="w-full mt-2 text-center">
            <span
              onClick={() => {
                navigate(`/details/tv/${show.id}`);
              }}
              className="inline-block px-2 py-1 text-sm font-medium text-text bg-accent rounded-md md:text-base line-clamp-1"
            >
              {show.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MediaGrid;
