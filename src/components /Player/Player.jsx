import React, { useState, useRef, useEffect, Fragment } from "react";

import Song1 from "../../assets/images/rec_song_1.svg";
import bgPalyer from "../../assets/images/bgplayer.svg";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import RepeatOneOnIcon from "@mui/icons-material/RepeatOneOn";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import ListAltIcon from '@mui/icons-material/ListAlt';
import FavoriteList from "./FavoriteList";

const Player = ({ playlist = [] }) => {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume: 100%
  const [isMuted, setIsMuted] = useState(false); // Mute state
  const [isLoopingTrack, setIsLoopingTrack] = useState(false);
  const [isLoopingPlaylist, setIsLoopingPlaylist] = useState(false);
  const [isFavoriteListOpen, setFavoriteListOpen] = useState(false)

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleNextTrack = () => {
    const nextTrack =
      isLoopingPlaylist || currentTrack + 1 < playlist.length
        ? (currentTrack + 1) % playlist.length
        : currentTrack;

    setCurrentTrack(nextTrack);
    setCurrentTime(0);
    setIsPlaying(false);
    audioRef.current.load();
    setTimeout(() => togglePlayPause(), 0); // Automatically play next track
  };

  const handlePrevTrack = () => {
    const prevTrack =
      isLoopingPlaylist || currentTrack > 0
        ? (currentTrack - 1 + playlist.length) % playlist.length
        : currentTrack;

    setCurrentTrack(prevTrack);
    setCurrentTime(0);
    setIsPlaying(false);
    audioRef.current.load();
    setTimeout(() => togglePlayPause(), 0); // Automatically play previous track
  };

  const seekForward = () => {
    const newTime = Math.min(audioRef.current.currentTime + 5, duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const seekBackward = () => {
    const newTime = Math.max(audioRef.current.currentTime - 5, 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const toggleLoopTrack = () => {
    setIsLoopingTrack(!isLoopingTrack);
    audioRef.current.loop = !isLoopingTrack;
  };

  const toggleLoopPlaylist = () => {
    setIsLoopingPlaylist(!isLoopingPlaylist);
  };

  useEffect(() => {
    const handleTrackEnd = () => {
      if (!isLoopingTrack) {
        handleNextTrack();
      }
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener("ended", handleTrackEnd);

    return () => {
      audioElement.removeEventListener("ended", handleTrackEnd);
    };
  }, [isLoopingTrack, currentTrack, isLoopingPlaylist]);

  const progressPercentage = (currentTime / duration) * 100 || 0;

  return (
    <Fragment>
    <div className="grid grid-rows-3 w-full sm:grid-rows-1 sm:grid-cols-[1fr_2fr_1fr] items-center px py-2 lg:p-4 sm:w-[82%] fixed bottom-0 right-0 z-[99]">
      
      <div className="flex items-center gap-3 ">
        <img src={Song1} alt="" className="w-[60px] lg:w-[80px] rounded-full" />
        <div>
          <h3 className="font-semibold text-[.8rem] lg:text-[.9rem] text-color-primary">
            Jiwa yang Bersedih
          </h3>
          <p className="font-medium  text-[.8rem] lg:text-[.9rem] text-color-light-dim">
            Ghea Indrawati
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-3">
        {/* controls */}
        <div className="flex lg:gap-4 gap-2 justify-center ">
          <button>
            <ShuffleIcon />
          </button>
          <button onClick={handlePrevTrack}>
            <SkipPreviousIcon  />
          </button>
          <button onClick={togglePlayPause} className="text-variant-primary">
            {isPlaying ? <PauseCircleIcon  fontSize="large"/> : <PlayCircleIcon fontSize="large"/>}
          </button>

          <button onClick={handleNextTrack}>
            <SkipNextIcon  />
          </button>
          <button onClick={toggleLoopTrack} >
            {isLoopingTrack ? <RepeatOneOnIcon className="bg-white text-variant-primary"/> : <RepeatOneIcon />}
          </button>
        </div>
        {/* audio player */}
        <div className="flex w-full gap-4 items-center sm:px lg:px-12">
          <p className="text-[.9rem] text-color-primary">{formatTime(currentTime)}</p>
          <audio
            ref={audioRef}
            src={playlist[currentTrack]}
            // src=""
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            className="hidden"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={progressPercentage}
            onChange={handleProgressChange}
            className="w-full h-1 rounded-lg appearance-none focus:outline-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #7C74EE ${progressPercentage}%, #D3D3D3 ${progressPercentage}%)`,
            }}
          />
          <p className="text-[.9rem] text-color-primary">{formatTime(duration)}</p>
        </div>
      </div>
      <div className="flex lg:gap-6  gap-3 justify-center items-center">
        <button className="font-thin">
          <FavoriteBorderIcon />
        </button>
        <button onClick={toggleMute}>{isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}</button>
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume * 100}
          onChange={handleVolumeChange}
          className="w-[50%] h-1 rounded-lg appearance-none focus:outline-none cursor-pointer"
          style={{
            background: isMuted
              ? "#D3D3D3"
              : `linear-gradient(to right, #7C74EE ${volume * 100}%, #D3D3D3 ${
                  volume * 100
                }%)`,
          }}
        />
        <button onClick={()=> setFavoriteListOpen(prev=> !prev)}>
            <ListAltIcon/>
        </button>
      </div>

      {/* bg overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full  bg-cover bg-center backdrop-blur shadow-gray z-[-1]`}
        style={{ backgroundImage: `url(${bgPalyer})` }}
      ></div>
    </div>
    <FavoriteList isOpen={isFavoriteListOpen}/>
    </Fragment>
  );
};

export default Player;
