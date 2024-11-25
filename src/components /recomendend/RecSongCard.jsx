
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const RecSongCard = ({title, artist, isPlay=false, image}) => {
  return (
    <div
      className={` relative w-full sm:w-[20%] max-w-[200px] max-h-[260px] rounded-2xl 
        overflow-hidden 
        `}
    >
        {/* iamge */}
      <div className="relative">
        <img src={image} alt="" className="w-full" />
        <div className="playbtn-overlay absolute bottom-[10px] right-3 w-[35px] h-[35px] rounded-full bg-[#121212] opacity-[.5] z-[9]">
      </div>
      <div className="absolute flex hover:cursor-pointer items-center justify-center bottom-[10px] right-3 w-[35px] h-[35px] rounded-full z-[9000]">
            
        {isPlay?<PauseIcon className="text-white"/>:<PlayArrowIcon className="text-white"/>}
      </div>
      </div>
 {/* text content */}
      <div className="mt-4">
        <h3 className="text-[.9rem] font-medium text-color-primary capitalize">
          {title}
        </h3>
        <p className="text-[.7rem]  text-color-dim ps-1 capitalize">
          {artist}
        </p>
      </div>
    
    </div>
  );
};

export default RecSongCard;
