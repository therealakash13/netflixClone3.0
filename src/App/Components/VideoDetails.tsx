import React from 'react';
import VideoPlayer from './VideoPlayer';
import PosterInfo from './PosterInfo';
import Sidebar from './Sidebar';

import type { VideoDetailsProps } from './Types'; // optional: define a shared types file

const VideoDetails: React.FC<VideoDetailsProps> = ({
  videoData,
  tvData,
  videoUrl,
  selectedData,
  setKey,
  moveToLink,
  onCategoryClick,
  categories,
}) => {
  const data = videoData || tvData;

  if (!data) return null;

  return (
    <div className="flex h-[91%] p-2 space-x-2 border-2 border-gray-700 rounded-xl border-r-0 border-l-0 border-b-0">
      <div className="w-[70%] rounded-lg">
        <div className="h-full">
          {videoUrl ? (
            <VideoPlayer videoUrl={videoUrl} />
          ) : (
            <PosterInfo
              posterUrl={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              title={data.title || data.name}
              tagline={data.tagline}
              overview={data.overview}
              languages={data.spoken_languages}
              genres={data.genres}
              companies={data.production_companies}
              countries={data.production_countries}
              status={data.status}
              releaseDate={data.release_date || data.first_air_date}
              voteAverage={data.vote_average}
              revenue={data.revenue}
              budget={data.budget}
              runtime={data.runtime ? `${data.runtime} min` : undefined}
              moveToLink={moveToLink}
            />
          )}
        </div>
      </div>

      <Sidebar
        selectedData={selectedData}
        setKey={setKey}
        categories={categories}
        onCategoryClick={onCategoryClick}
      />
    </div>
  );
};

export default VideoDetails;
