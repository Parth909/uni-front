import React from "react";
import DownArrow from "../../../icons/DownArrow";
import { Link } from "react-router-dom";
// hook
import useTagColorGen from "../../../../hooks/useTagColorGen";
import { connect } from "react-redux";

const ChannelAbout = ({ channel, thm }) => {
  const colors = useTagColorGen();
  const [togData, setTogData] = React.useState({
    desc: true,
    categories: true,
    otherLinks: true,
  });

  const links = [
    { linkname: "facebook", link: "https://facebook.com" },
    { linkname: "instagram", link: "https://instagram.com" },
    { linkname: "youtube", link: "https://youtube.com" },
    { linkname: "twitter", link: "https://twitter.com" },
    { linkname: "linkedin", link: "https://linkedin.com" },
    { linkname: "tumblr", link: "https://tumblr.com" },
  ];

  const cats = [
    "Real-time strategy",
    "Shooters (FPS and TPS)",
    "Multiplayer online battle arena (MOBA)",
    "Role-playing (RPG, ARPG, and More)",
    "Simulation and sports",
    "Action-adventure",
  ];

  const { desc, categories, otherLinks } = togData;

  return (
    channel._id && (
      <div className="about-channel-container px-1">
        <div className="row my-3">
          <div className="col-12 col-md-10 col-lg-8 text-left px-md-4 btn pt-0">
            <div
              className="btn pointer vid-chnl-abt-LHS-title py-1"
              name="desc"
              onClick={(e) => setTogData({ ...togData, ["desc"]: !desc })}
            >
              <DownArrow className="vid-chnl-abt-down-arr" thm={thm} />
              <span> Description</span>
            </div>
            <div
              className={`vid-chnl-pg-about-desc mt-2 ${
                desc === true ? "" : "d-none"
              }`}
            >
              {channel.description}
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-8 text-left px-md-4 btn pt-0">
            <div
              className="btn pointer vid-chnl-abt-LHS-title py-1"
              name="desc"
              onClick={(e) =>
                setTogData({ ...togData, ["categories"]: !categories })
              }
            >
              <DownArrow className="vid-chnl-abt-down-arr" thm={thm} />
              <span> Categories</span>
            </div>
            <div
              className={`vid-chnl-pg-about-cats mt-2 ${
                categories === true ? "" : "d-none"
              }`}
            >
              <div className="row px-2">
                {channel.categories.length > 0 &&
                  channel.categories.map((cat, i) => (
                    <Link to="/" key={cat.id}>
                      <div
                        key={i}
                        className={`d-inline-block px-2 m-2 rounded-lg vid-chnl-cat`}
                        style={{
                          ...colors[i % colors.length],
                          whiteSpace: "nowrap",
                          color: `${colors[i % colors.length].color}`,
                        }}
                        title={cat.title}
                      >
                        {cat.title}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-8 text-left px-md-4 btn pt-0">
            <div
              className="btn pointer vid-chnl-abt-LHS-title "
              name="desc"
              onClick={(e) =>
                setTogData({ ...togData, ["otherLinks"]: !otherLinks })
              }
            >
              <DownArrow className="vid-chnl-abt-down-arr" thm={thm} />
              <span> Other Links</span>
            </div>
            <div
              className={`vid-chnl-pg-about-links mt-2 ${
                otherLinks === true ? "" : "d-none"
              }`}
            >
              <div className="row">
                {links.map((item, i) => (
                  <div className="col-12 col-md-6" key={i}>
                    <a
                      className="chnl-abt-links"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="chnl-abt-linkname">{`${item.linkname} - `}</span>
                      <span className="chnl-abt-link">{item.link}</span>
                      <br />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  channel: state.channel,
});

export default connect(mapStateToProps, {})(ChannelAbout);
