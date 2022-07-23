import React from "react";

const SongItem = ({ song }) => {
  const { title, artist, genre } = song;
  return (
    <li className="song-item">
      <span className="song-title">{title}</span>
      <span className="song-artist">{artist}</span>
      <span className="song-genre">{genre}</span>
    </li>
  );
};

export default SongItem;
