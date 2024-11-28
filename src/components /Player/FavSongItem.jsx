import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { useState } from "react";


const FavSongItem = ({ track, number}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`flex gap-4 ps-3 p-2 transition-all ease-in-out cursor-pointer
            ${active && "bg-indigo-100"}
         hover:bg-indigo-100 rounded-lg group`}
      onClick={() => setActive((prev) => !prev)}
    >
      <div className="grid place-content-center min-w-[40]">
        <h4
          className={`text-[.9rem] font-medium text-color-primary group-hover:hidden ${
            active && "hidden"
          }`}
        >
          {number}
        </h4>
        <button
          className={`group-hover:block  ${active ? "block" : "hidden"}`}
          onClick={() => setActive((prev) => !prev)}
        >
          {active ? (
            <PauseCircleFilledIcon onClick={() => setActive(false)} />
          ) : (
            <PlayCircleIcon onClick={() => setActive(true)} />
          )}
        </button>
      </div>
      <div>
        <h4 className="text-[.9rem] font-medium text-color-primary">
          {track.name}
        </h4>
        <p className="text-[.8rem] font-medium text-color-light-dim">
          {track?.artists.map((artist) => artist.name).join(", ")} •{" "}
          {track?.duration}
        </p>
      </div>
    </div>
  );
};

export default FavSongItem;
