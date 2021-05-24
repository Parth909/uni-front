import React from "react";
import { Link } from "react-router-dom";
import thumb from "../../../../samplesimgs/schweiz2.jpg";
import vidPlaylist from "../../../../img/vid_playlist_white.svg";

const ChannelPlaylists = () => {
  const [data, setData] = React.useState({
    title: "Switzerland 4K - The land of unending beauty",
    thumbnail: thumb,
  });

  const { title, thumbnail } = data;

  return (
    <div className="row home-video-grid chnl-pg-chnl-playlists">
      {[...Array(10)].map((e, i) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={i}>
          <div className="playlist-video-element mt-4 ">
            <Link to={`/video/1242342344${i}`}>
              <div className="play-img-wrapper ">
                <div className="playlist-video-thumbnail">
                  <img src={thumbnail} alt=".." />
                </div>
                <div className="playlist-video-count text-center">
                  <span>
                    <img src={vidPlaylist} className="playlist-vid-cnt-icon" />
                  </span>{" "}
                  27
                </div>
              </div>
            </Link>
            {/* title entering thumbnail fix -  mt-2 mt-sm-4 mt-md-0 */}
            <div className="container p-0 m-0 mt-2 mt-sm-2 mt-md-0 ">
              <div className="row h-video-details mt-2">
                <div className="col-12">
                  <div className="h-video-title pt-1 text-break">{title}</div>

                  <div className="my-1">
                    <span className="chnl-pg-v-playlist pointer">
                      View Playlist
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChannelPlaylists;
