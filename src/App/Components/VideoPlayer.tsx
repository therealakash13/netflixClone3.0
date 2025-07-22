import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  console.log(videoUrl);

  // if (!videoUrl) return null;

  return (
    // <div className="w-[100vw] h-[100vh]">
    //   <ReactPlayer
    //     style={{
    //       width: "100%",
    //       height: "100%",
    //     }}
    //     src={`https://www.youtube.com/watch?v=${videoUrl}`}
    //   />
    // </div>
    <div className="w-[100vw] h-[calc(100vh-64px)] overflow-hidden">
      <ReactPlayer
        src={`https://www.youtube.com/watch?v=${videoUrl}`}
        muted
        playing
        width="100%"
        height="100%"
        style={{ top: 0, left: 0 }}
      />
    </div>
  );
};

export default VideoPlayer;
