import React from 'react';

interface Language {
  english_name: string;
  name: string;
}

interface Genre {
  name: string;
}

interface Company {
  logo_path: string;
  name: string;
}

interface Country {
  name: string;
}

interface VideoDetailsProps {
  posterUrl: string;
  title: string;
  tagline?: string;
  overview: string;
  languages: Language[];
  genres: Genre[];
  companies: Company[];
  countries: Country[];
  status: string;
  releaseDate?: string;
  voteAverage: number;
  revenue?: number;
  budget?: number;
  runtime?: string;
  moveToLink: () => void;
}

const PosterInfo: React.FC<VideoDetailsProps> = ({
  posterUrl,
  title,
  tagline,
  overview,
  languages,
  genres,
  companies,
  countries,
  status,
  releaseDate,
  voteAverage,
  revenue,
  budget,
  runtime,
  moveToLink,
}) => {
  return (
    <div className="flex w-full h-[72%] p-2 text-white">
      <div className="w-[30%]">
        <img src={posterUrl} alt={title} className="object-cover rounded-xl w-full h-[93%]" />
        <div className="flex justify-end mt-2">
          <button onClick={moveToLink}>
            <img src="/assets/imdb-icon.png" className="h-10" alt="IMDb" />
          </button>
        </div>
      </div>

      <div className="w-[70%] p-2 overflow-auto">
        <div className="text-3xl font-bold mb-2">
          {title} {tagline && <span className="text-base">({tagline})</span>}
        </div>

        <p className="text-xl mb-2">{overview}</p>

        <p><strong>Status:</strong> {status}</p>
        {releaseDate && <p><strong>Release Date:</strong> {releaseDate}</p>}
        <p><strong>Score:</strong> {voteAverage}</p>
        {runtime && <p><strong>Runtime:</strong> {runtime}</p>}
        {revenue && <p><strong>Revenue:</strong> ₹{revenue.toLocaleString()}</p>}
        {budget && <p><strong>Budget:</strong> ₹{budget.toLocaleString()}</p>}

        <div className="mt-3">
          <p className="font-semibold">Languages:</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, idx) => (
              <span key={idx} className="bg-gray-600 px-3 py-1 rounded-xl">{lang.english_name}</span>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="font-semibold">Genres:</p>
          <div className="flex flex-wrap gap-2">
            {genres.map((g, idx) => (
              <span key={idx} className="bg-gray-600 px-3 py-1 rounded-xl">{g.name}</span>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="font-semibold">Production Companies:</p>
          <div className="flex gap-4 flex-wrap">
            {companies.map((c, idx) => (
              <img key={idx} className="h-8" src={`https://image.tmdb.org/t/p/w500${c.logo_path}`} alt={c.name} />
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="font-semibold">Production Countries:</p>
          <div className="flex flex-wrap gap-2">
            {countries.map((c, idx) => (
              <span key={idx} className="bg-gray-600 px-3 py-1 rounded-xl">{c.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterInfo;
