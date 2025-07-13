import { useEffect, useState } from "react";
import { fetchVideo } from "../../Services/MovieFetch";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../Components/VideoPlayer";
import type { Video } from "../../Services/videoTypes";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const { type } = useParams<{ type: "movie" | "tv" }>();

  const [videoData, setVideoData] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id && type) {
        const results = await fetchVideo(id, type);
        if (results) {
          setVideoData(results);
        }
      }
    };

    fetchData();
  }, [id, type]);

  const trailer = videoData.find((v) => v.type === "Trailer");

  return (
    <div className="pt-16 min-h-screen">
      {trailer && (
        <VideoPlayer
          videoUrl={`https://www.youtube.com/embed/${trailer.key}`}
        />
      )}
    </div>
  );
}
