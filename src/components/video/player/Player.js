import React, { useCallback } from "react";
import HOBL from "../../layout/HOBL";
import { useParams } from "react-router-dom";
import videojs from "video.js";
// import offset from "videojs-offset"; - works partially

const Player = ({ videoData }) => {
  const playerRef = useCallback(
    (player) => {
      console.log("videoData.video_url", videoData.video_url);

      if (player == null) return;
      player.innerHTML = "";

      const source = document.createElement("source");
      source.setAttribute("src", videoData.video_url);
      // source.setAttribute("type", "video/mp4");
      player.append(source);
      const plyr = videojs(player, {
        autoplay: "muted",
        controls: true,
        poster: videoData.thumb_url,
        loop: false,
        playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3],
        height: "100",
        userActions: {
          hotkeys: true,
        },
        aspectRatio: "16:9",
      });

      return () => {
        if (plyr) {
          plyr.dispose();
        }
      };
    },
    [videoData]
  );

  return (
    videoData.video_url && (
      <>
        <div>
          {/* Safari & Chrome support Autoplay if the video is Muted */}
          <video
            ref={playerRef}
            id="videoPlayer"
            className="video-js vjs-big-play-centered"
            controls
          >
            {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" /> */}
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                rel="noreferrer"
              >
                supports HTML5 video
              </a>
            </p>
          </video>
        </div>
      </>
    )
  );
};

export default Player;
