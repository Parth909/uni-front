const SideChannelItem = ({ ChannelImg, name }) =>
  ChannelImg && name ? (
    <div>
      <span href="#" className="list-group-item unifiq-side-item px-3 py-2">
        <div className="row">
          <div className="col-3" style={{ verticalAlign: "middle !important" }}>
            <img
              src={ChannelImg}
              style={{ height: "20px !important", width: "20px" }}
              alt=".."
            />
          </div>
          <div className="col-9 sidebar-name overflow-dots">{name}</div>
        </div>
        <span style={{ verticalAlign: "middle" }}>{"  "}</span>
      </span>
    </div>
  ) : (
    <div>
      <span
        href="#"
        className="list-group-item unifiq-side-item  side-grp-name px-3 py-2"
      >
        <div className="row">
          <div className="col-12 sidebar-name">{name}</div>
        </div>
        <span style={{ verticalAlign: "middle" }}>{"  "}</span>
      </span>
    </div>
  );

export default SideChannelItem;
