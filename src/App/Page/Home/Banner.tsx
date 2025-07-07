import type { Movie } from "../../Services/movies.type";

interface BannerProps {
  receivedData: Movie;
  // navigateToWatch?: (id: number) => void;
}

const Banner: React.FC<BannerProps> = ({ receivedData }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${receivedData.backdrop_path}`;

  return (
    <div className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden">
      {/* Background image */}
      <img
        src={imageUrl}
        alt={receivedData?.title || "Movie backdrop"}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Optional gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      {/* Movie content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 sm:px-12 lg:px-24 pb-20">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
          {receivedData?.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6 max-w-3xl">
          {receivedData?.overview?.slice(0, 250)}...
        </p>
        <button className="bg-white text-black py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-12 text-sm sm:text-lg lg:text-xl rounded-lg hover:bg-opacity-70 transition duration-500">
          ► Play / More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
