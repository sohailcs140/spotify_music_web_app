import {getFavoriteTracks} from "../../utils/localStorage.js"
import FavSongItem from "./FavSongItem";
import bgPalyer from "../../assets/images/bgplayer.svg";
import { useEffect } from "react";
import { useState } from "react";


const FavoriteList = ({ isOpen }) => {
  
    const [favoriteTraks, setFavoriteTraks] = useState([])

    
    useEffect(()=>{

        setFavoriteTraks(getFavoriteTracks());

      }, [isOpen])
      
    
    
    
  return (
    <div
      className={`absolute bottom-[8%]  h-[80%]
         transform  w-full  md:w-[500px]
          shadow-md
         transition-all ease-in-out
          overflow-hidden
        py
         z-[1000]
        ${isOpen ? "translate-x-0 right-0" : "translate-x-[100%] right-0 "}
    `}
    >
        <h1 className="px text-[1.4rem] font-bold text-color-primary shadow-sm pb-4">Favorite List</h1>
      <div className="flex flex-col gap-3 mt-5 px max-h-[100%] w-full overflow-y-auto">
        {
            favoriteTraks?.map((track, index)=>{
              console.log(index + 1);
              
                return <FavSongItem track={track} number={index + 1} key={index}/>
            })
        }
      </div>
      {/* bg overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full  bg-cover bg-center backdrop-blur shadow-gray z-[-1]`}
        style={{ backgroundImage: `url(${bgPalyer})` }}
      ></div>
    </div>
  );
};

export default FavoriteList;
