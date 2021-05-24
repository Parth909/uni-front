import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "../../../icons/Hamburger";
import pubgi from "../../../../samplesimgs/pubg-img.jpg";
import pubgp from "../../../../samplesimgs/pubg-pic.png";
// VideoChannel belongs to categories, Video contains Tags
// Nested HOC's not used as name conflicts of props occur

import { setUserChannels } from "../../../../actions/user";

const YourChannels = ({
  user: { _id, user_channels },
  sec,
  thm,
  setUserChannels,
}) => {
  const [cats, setCats] = React.useState(["All"]);
  const [categ, setCateg] = React.useState(["All"]);
  const [togCats, setTogCats] = React.useState(true);
  const [channels, setChannels] = React.useState(null);

  React.useEffect(() => {
    if (_id) {
      setUserChannels(_id);
    }
  }, [_id, sec]);

  React.useEffect(() => {
    if (user_channels.length > 0) {
      setChannels(user_channels);
    }
  }, [user_channels]);

  React.useEffect(() => {
    if (user_channels.length > 0) {
      let arr = user_channels.map((chnl) => [...chnl.categories]);
      let arr1d = [];
      for (let row of arr) for (let cat of row) arr1d.push(cat);
      setCats(["All", ...arr1d]);
    }
  }, [user_channels]);

  const addRmvCateg = (cat) => {
    if (categ.includes(cat)) {
      let li = [...categ];
      li = li.filter((ct) => ct != cat);
      setCateg(li);
    } else {
      setCateg([...categ, cat]);
    }
  };

  return (
    _id &&
    user_channels.length > 0 && (
      <div className="display-channels ">
        <div className="row">
          <div className="col-12 col-md-4 text-center px-2 btn pt-0 my-3">
            <div
              className="v-channels-LHS-cats-head pointer py-1"
              onClick={(e) => setTogCats((st) => !st)}
            >
              <span>
                <Hamburger className="v-vid-chnls-cats-ham" thm={thm} />
              </span>
              <span className="cats-head ">Categories</span>
            </div>
            <div
              className={`v-vid-channels-cats ${
                togCats === true ? "" : "d-none"
              }`}
            >
              {cats.map((cat, i) => (
                <div
                  key={i}
                  className={`d-block v-vid-channels-cat text-ovfl-ellipsis ${
                    categ.includes(cat) ? "blue-cat-highlight" : ""
                  } py-2 my-1 pointer`}
                  onClick={(e) => addRmvCateg(cat)}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-8 d-block mt-md-3 mb-3">
            <div className="v-channels-RHS-content-head px-2 text-left text-break d-none d-md-block">
              Channels
            </div>
            <div className="v-vid-channels py-1">
              {channels &&
                channels.length > 0 &&
                channels.map((channel, i) => (
                  <Link
                    to={`/user/${_id}/videos/view/chnl/${channel._id}/home`}
                    key={i}
                  >
                    <div className="v-vid-channel">
                      <div className="row">
                        <div className="col-12 col-lg-5">
                          <div className="v-vid-channel-img-box">
                            <img
                              src={channel.channel_banner_url}
                              className="v-vid-channel-img"
                              alt=".."
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-7 text-center text-lg-left">
                          <div className="v-vid-channel-pic mt-2 mt-md-0">
                            <img
                              className="logo"
                              src={channel.channel_pic_url}
                              alt=".."
                            />
                          </div>
                          <div className="v-vid-channel-name text-ovfl-ellipsis mt-lg-2">
                            {channel.title}
                          </div>
                          <div className="v-vid-channel-desc text-ovfl-ellipsis mt-lg-2">
                            {channel.description}
                          </div>
                          <div className="v-vid-channel-subs text-ovfl-ellipsis mt-lg-2">
                            •{" "}
                            {channel.followers.length === 1
                              ? `${channel.followers.length} follower`
                              : `${channel.followers.length} followers`}
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

// Product reviews, How to, Vlogs, Gaming, Comedy, Haul, Memes, Best Of, Educational, Unboxing, Q & A, Collection, Pranks
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setUserChannels })(YourChannels);
