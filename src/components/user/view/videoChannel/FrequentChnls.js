import React from "react";
import Hamburger from "../../../icons/Hamburger";
import { Link } from "react-router-dom";
import pubgi from "../../../../samplesimgs/pubg-img.jpg";
import pubgp from "../../../../samplesimgs/pubg-pic.png";
// VideoChannel belongs to categories, Video contains Tags
// Nested HOC's not used as name conflicts of props occur

const cats = [
  "All",
  "Product reviews",
  "How to",
  "Vlogs",
  "Gaming",
  "Comedy",
  "Unboxing",
];
const FrequentChnls = ({ sec, thm }) => {
  const [categ, setCateg] = React.useState("All");
  const [togCats, setTogCats] = React.useState(true);

  React.useEffect(() => {
    setCateg("All");
  }, [sec]);

  return (
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
                className={`d-block v-vid-channels-cat ${
                  categ === cat ? "blue-cat-highlight" : ""
                } py-2 my-1 pointer`}
                onClick={(e) => setCateg(cat)}
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
            {[...Array(6)].map((chnl, i) => (
              <Link to="/user/12545322/videos/view/chnl/9679897/home" key={i}>
                <div className="v-vid-channel">
                  <div className="row">
                    <div className="col-12 col-lg-5">
                      <div className="v-vid-channel-img-box">
                        <img
                          src="https://cdn.discordapp.com/discovery-splashes/679875946597056683/75d0a14a28750f28a086b3376de66927.jpg?size=512"
                          className="v-vid-channel-img"
                          alt=".."
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 text-center text-lg-left">
                      <div className="v-vid-channel-pic mt-2 mt-md-0">
                        <img
                          className="logo"
                          src="https://cdn.discordapp.com/icons/679875946597056683/a_517c3571f4e19a4200e1b58ab9316afa.png?size=128"
                          alt=".."
                        />
                      </div>
                      <div className="v-vid-channel-name text-ovfl-ellipsis mt-lg-2">
                        Valorant Official (PC/Console/Stadia)
                      </div>
                      <div className="v-vid-channel-desc text-ovfl-ellipsis mt-lg-2">
                        Official Valorant PC, Xbox, PS4 and Stadia Gameplay
                        channel - Best of all
                      </div>
                      <div className="v-vid-channel-subs text-ovfl-ellipsis mt-lg-2">
                        • 10,240,5789 Followers
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
  );
};

// Product reviews, How to, Vlogs, Gaming, Comedy, Haul, Memes, Best Of, Educational, Unboxing, Q & A, Collection, Pranks

export default FrequentChnls;
