import RecSongsList from "./components /recomendend/RecSongsList";
import TopChartList from "./components /top-charts/TopChartList";
import AlbumList from "./components /album/AlbumList";
import { Suspense, lazy } from "react";

function App() {
  return (
    <div className=" overflow-hidden">
      <RecSongsList />
      <TopChartList />
      <AlbumList />
    </div>
  );
}

export default App;
