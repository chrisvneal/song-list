import "../styles.scss";

import SongLists from "./SongLists";
import SongInput from "./SongInput";

export default function App() {
  return (
    <div className="App">
      <SongInput />

      <section className="songs">
        <h2>Song Lists</h2>
        <SongLists />
      </section>
    </div>
  );
}
