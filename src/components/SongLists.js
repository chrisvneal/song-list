import React from "react";

import SongList from "./SongList";

const SongLists = () => {
  return (
    <div className="song-lists">
      <SongList genre="Hip-Hop" />

      <SongList genre="R &amp; B" />
    </div>
  );
};

export default SongLists;
