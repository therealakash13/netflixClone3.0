import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  videoUrl?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  console.log(videoUrl);
  
  // if (!videoUrl) return null;

  return (
    <ReactPlayer src={`https://www.youtube.com/watch?v=${videoUrl}`} />
  );
};

export default VideoPlayer;
