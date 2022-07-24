import React from "react";

const SongItem = ({ song }) => {
  const { title, artist } = song;
  return (
    <li className="song-item" key={title}>
      <span className="song-title">{title}</span>
      <span className="song-artist">{artist}</span>
    </li>
  );
};

export default SongItem;
