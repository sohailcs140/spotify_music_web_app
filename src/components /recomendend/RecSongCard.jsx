import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import {
  addToFavoriteStorage,
  removeFromFavoriteStorage,
  isInFavoriteStorage
} from "../../utils/localStorage.js";

const RecSongCard = ({ track }) => {
  const isPlay = false;
  const tempLike =  isInFavoriteStorage(track)
  console.log(tempLike, "tempLike ooooooooooooooooooooooooooooooooooooooo");
  
  const [favorite, setFavorite] = useState(tempLike);
  console.log(favorite, "favoritefavorite  favorite");

  const addToFavorite = (track) => {
    addToFavoriteStorage(track);
    setFavorite((prev) => !prev);
  };

  const removeFromFavorite = (track) => {
    removeFromFavoriteStorage(track);
    setFavorite((prev) => !prev);
  };

  return (
    <div
      className={` relative rounded-2xl 
        overflow-hidden item group transition-all ease-out
        `}
    >
      {/* iamge */}
      <div className="relative">
        <img src={track?.album?.images[0]?.url} alt="" className="w-full" />
        {track?.preview_url && (
          <div className="playbtn-overlay absolute bottom-[10px] right-3 w-[35px] h-[35px] rounded-full bg-[#121212] opacity-[.5] z-[9]"></div>
        )}
        {track?.preview_url && (
          <div className="absolute flex hover:cursor-pointer items-center justify-center bottom-[10px] right-3 w-[35px] h-[35px] rounded-full z-[9000]">
            {isPlay ? (
              <PauseIcon className="text-white" />
            ) : (
              <PlayArrowIcon className="text-white" />
            )}
          </div>
        )}
      </div>
      {/* text content */}
      <div className="mt-4">
        <h3 className="text-[.9rem] font-medium text-color-primary capitalize">
          {track.name}
        </h3>
        <p className="text-[.7rem]  text-color-dim ps-1 capitalize">
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>

      <div
        className="absolute text-center transition-all ease-out
         group-hover:top-0 group-hover:right-0
      text-white top-[100] right-[100] p-3 bg-gradient-to-tr rounded-bl-full from-variant-primary to-variant-secondary"
      >
        {!favorite ? (
          <FavoriteBorderIcon
            fontSize="large"
            className=" cursor-pointer"
            onClick={() => addToFavorite(track)}
          />
        ) : (
          <FavoriteIcon
            fontSize="large"
            className=" cursor-pointer"
            onClick={() => removeFromFavorite(track)}
          />
        )}
      </div>
    </div>
  );
};

export default RecSongCard;
