import RecSongsList from "./components /recomendend/RecSongsList";
import TopChartList from "./components /top-charts/TopChartList";
import AlbumList from "./components /album/AlbumList";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <RecSongsList />
      <TopChartList />
      <AlbumList />
    </Fragment>
  );
}

export default App;
