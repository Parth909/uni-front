import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import valo from "../../../../samplesimgs/valo.jpg";
import astro from "../../../../img/astro.gif";
// actions
import { setFeaturedChannels } from "../../../../actions/channel";
import humanize from "../../../../utils/humanize";

const ChannelFeatured = ({ featured_channels, setFeaturedChannels }) => {
  const { channelId } = useParams();
  const [followers, setFollowers] = React.useState(null);

  React.useEffect(() => {
    if (
      featured_channels.length > 0 &&
      featured_channels.followers &&
      featured_channels.followers.length > 0
    ) {
      setFollowers(featured_channels.followers);
    }
  }, [featured_channels]);

  React.useEffect(() => {
    if (channelId) {
      setFeaturedChannels(channelId);
    }
  }, [channelId]);

  return featured_channels && featured_channels.length > 0 ? (
    <div className=" p-0 m-0 mt-2 featured-channel-container">
      <div className="row">
        {featured_channels.map((channel, i) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={channel._id}>
            <div className="featured-channel-cover-prof">
              <div className="featured-channel-cover-prof-wrapper">
                <div className="featured-ch-cover-img">
                  <img src={channel.channel_banner_url} />
                </div>
                <div className="featured-ch-img d-flex mx-auto">
                  <img src={channel.channel_pic_url} />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="feat-channel-name text-ovfl-ellipsis">
                {channel.title}
              </div>
              <div className="feat-channel-followers text-ovfl-ellipsis">
                {/* {followers && followers.length === 1
                  ? `${followers.length} follower`
                  : `${followers.length} followers`} */}
              </div>
              <Link
                to={`/user/${channel.owned_by}/videos/view/chnl/${channel._id}/home`}
              >
                <div className="btn view-feat-chnl-btn">View Channel</div>
              </Link>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="d-block text-center">
      <img
        src={astro}
        style={{ height: "300px", width: "auto", borderRadius: "40%" }}
      />
      <h3>No Featured Channels</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  featured_channels: state.channel.featured_channels,
});

export default connect(mapStateToProps, { setFeaturedChannels })(
  ChannelFeatured
);
