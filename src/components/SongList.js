import React from "react";

import SongItem from "./SongItem";

const SongList = ({ genre, songs }) => {
  return (
    <div className="song-list">
      <h3 className="song-genre">{genre}</h3>
      <ul>
        <SongItem title="The Time Has Come" artist="MCBeth" genre="Hip Hop" />
      </ul>
    </div>
  );
};

export default SongList;
