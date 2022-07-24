import React from "react";

import SongList from "./SongList";

const SongLists = ({ genres }) => {
  // const [genres] = useState(["Hip-Hop", "R & B", "Trap"]);
  const renderLists = genres.map((genre) => (
    <SongList genre={genre} key={genre} />
  ));

  return (
    <div className="song-lists">
      <h2>Song Lists</h2>
      {renderLists}
    </div>
  );
};

export default SongLists;
