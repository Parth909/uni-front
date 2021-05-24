import React from "react";
import SidebarMenuItem from "./utils/SidebarMenuItem";
import SideChannelItem from "./utils/SideChannelItem";

// For css written in one file after that will be split into files
// import "../css/dlayout.scss";

// Icons ---
import HomeSvg from "../icons/HomeSvg";
import VideoSide from "../icons/VideoSide";
import PlaylistIcon from "../icons/PlaylistIcon";
import SavedPosts from "../icons/SavedPosts";
import Uploads from "../icons/Uploads";
import Following from "../icons/Following";
import Settings from "../icons/Settings";
// import "../css/layout.scss";

// Channel images
import ChannelI from "../../img/slack.png";
import Apple from "../../img/app-store.png";

// Use this Dim Sidebar so that when user clicks anywhere outside sidebar it will collapse
const PushableDimSidebar = ({ toggle, WComp, WCompProps }) => {
  const stopScroll = (e) => {
    if (toggle === "") {
      e.preventDefault();
    }
  };

  return (
    <div className={`d-flex ${toggle}`} id="wrapper">
      {/* Sidebar */}
      <div id="sidebar-wrapper" onScroll={(e) => stopScroll(e)}>
        <div className="list-group">
          <SidebarMenuItem IconImg={HomeSvg} name="Home" route="/" />
          {/* <SidebarMenuItem IconImg={Settings} name="Settings" route="/user/4c948705-6036-4135-ba9f-0f5843ba3f92/videos/view/yours" /> */}
          <SidebarMenuItem
            IconImg={Following}
            name="Your Channels"
            route="/user/4c948705-6036-4135-ba9f-0f5843ba3f92/videos/view/yours"
          />
          <SidebarMenuItem
            IconImg={Following}
            name="Following"
            route="/user/4c948705-6036-4135-ba9f-0f5843ba3f92/videos/view/following"
          />
          <SidebarMenuItem name="Collection - " route="/" />
          <SidebarMenuItem IconImg={VideoSide} name="Videos" route="/" />
          {/* <SidebarMenuItem IconImg={PlaylistIcon} name="Playlists" route="/" /> */}
          {/* <SidebarMenuItem IconImg={SavedPosts} name="Saved Posts" route="/" /> */}
          {/* <SidebarMenuItem IconImg={Uploads} name="Uploads" route="/" /> */}
          <SidebarMenuItem name="Channels - " route="/" />
          <SideChannelItem ChannelImg={ChannelI} name="Pro Gamers" route="/" />
          <SideChannelItem ChannelImg={Apple} name="Nginx Builders" route="/" />
          <SideChannelItem
            ChannelImg={ChannelI}
            name="Who is jack & who is ziggler"
            route="/"
          />
          <SideChannelItem
            ChannelImg={Apple}
            name="MMMMMMMMM_MMMMMMMM msariana"
            route="/"
          />
          <SideChannelItem ChannelImg={ChannelI} name="Pro Gamers" route="/" />
          <SideChannelItem ChannelImg={Apple} name="Nginx Builders" route="/" />
          <SideChannelItem
            ChannelImg={ChannelI}
            name="Who is jack & who is ziggler"
            route="/"
          />
          <SideChannelItem
            ChannelImg={Apple}
            name="MMMMMMMMM_MMMMMMMM msariana"
            route="/"
          />
        </div>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper">
        <div className="container-fluid body-text-color">
          <WComp {...WCompProps} />
        </div>
      </div>
      {/* Page Content Wrapper */}
    </div>
  );
};

export default PushableDimSidebar;
