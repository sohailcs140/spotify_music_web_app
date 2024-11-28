import { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router";
import Client from "../api/axiosClient";
import RecSongsList from "../components /recomendend/RecSongsList";
import TopChartList from "../components /top-charts/TopChartList";
import AlbumList from "../components /album/AlbumList";
import { TopChartSkeletonLoader } from "../components /top-charts/TopChartList";
import { RecSongSkeletonLoader } from "../components /recomendend/RecSongsList";


const Search = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [searchType, setSearchType] = useState("track,album,artist,playlist");
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlayLists] = useState([]);
  const [albums, setAlbums] = useState([]);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  useEffect(() => {
    const getResults = async () => {
      try {
        setIsLoading(true);
        const resp = await Client.get(`search?q=${query}&type=${searchType}&market=US`);

        if(resp.status == 200){
          setTracks(resp.data.tracks.items)
          setPlayLists(resp.data.playlists.items)
          setAlbums(resp.data.albums)
          console.log(resp, "search results");
        }
        
      } catch (error) {
        console.log(error);
        
      } finally {
        setIsLoading(false);
      }
    };

    getResults();
  }, [query]);

  if(isLoading){
    return <Fragment>
      <RecSongSkeletonLoader/>
      <TopChartSkeletonLoader/>
    </Fragment>
  }
  return (
    <div>
      <RecSongsList tracksList={tracks} textTitle="Tracks"/>
      <TopChartList playlists={playlists} title="Avalible Playlists"/>
      <AlbumList searchAlbums={albums} title="Alboms"/>
    </div>
  );
};

export default Search;
