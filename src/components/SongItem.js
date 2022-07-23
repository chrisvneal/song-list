import React from "react";

const SongItem = ({ title, artist, genre }) => {
  return (
    <li className="song-item">
      <span className="song-title">{title}</span>
      <span className="song-artist">{artist}</span>
      <span className="song-genre">{genre}</span>
    </li>
  );
};

export default SongItem;
