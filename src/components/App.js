import { connect } from "react-redux";
import "../styles.scss";
import _ from "lodash";

import SongInput from "./SongInput";
import SongLists from "./SongLists";

const App = ({ genres }) => {
  return (
    <div className="App">
      <SongInput genres={genres} />
      <SongLists genres={genres} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // Use lodash to create unique list of genres for props
    genres: _.uniq(_.map(state.songs, "genre"))
  };
};

export default connect(mapStateToProps)(App);
