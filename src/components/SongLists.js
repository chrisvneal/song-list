import React, { useState } from "react";

import SongList from "./SongList";

const SongLists = () => {
  const [genres] = useState(["Hip-Hop", "R & B", "Trap"]);
  const renderLists = genres.map((genre) => (
    <SongList genre={genre} key={genre} />
  ));

  return <div className="song-lists">{renderLists}</div>;
};

export default SongLists;
