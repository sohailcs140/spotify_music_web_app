import { FAVORATE_STORAGE_KEY } from "./constants";


export function getFavoriteTracks(){
    
    const prevFavorite = JSON.parse(
        localStorage.getItem(FAVORATE_STORAGE_KEY) 
      ) ;
      

    return prevFavorite ? prevFavorite : []
}

function addToStorage(items){
    const stringifyItems = JSON.stringify(items) 

    localStorage.setItem(FAVORATE_STORAGE_KEY, stringifyItems)
}


export function addToFavoriteStorage(track) {
  const prevFavorites = getFavoriteTracks()

    addToStorage([...prevFavorites, track])
}

export function isInFavoriteStorage(track) {
  const storeFavorits =  getFavoriteTracks()
  
  storeFavorits?.forEach((tempTrack) => {
    
    console.log(tempTrack.id == track.id, "--- check ---")
    console.log("store_track_id", tempTrack.id);
    console.log("track_id", track.id);
    console.log("--- /check ---")


    
    if (tempTrack.id == track.id) {
      return true;
    }
  });

  return false;
}

export function removeFromFavoriteStorage(track) {
  const prevFavorites =  getFavoriteTracks()

  addToStorage([...prevFavorites.filter(item=> item.id != track.id)])
}
