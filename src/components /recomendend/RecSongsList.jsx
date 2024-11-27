import SectionHeading from "../common/SectionHeading";
import RecSongCard from "./RecSongCard";
import { Fragment, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import Song1 from "../../assets/images/rec_song_1.svg";
import Song2 from "../../assets/images/rec_song_2.svg";
import Song3 from "../../assets/images/rec_song_3.svg";
import Song4 from "../../assets/images/rec_song_4.svg";
import Song5 from "../../assets/images/rec_song_5.svg";
import Song6 from "../../assets/images/rec_song_6.svg";
import { getRandomRecommendations } from "../../api/dashboard";
import { useEffect } from "react";

const RecSongsList = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("")


  const options = {
    responsive: {
      0: {
        items: 1.5,
      },
      400: {
        items: 1.5,
      },
      600: {
        items: 1.5,
      },
      700: {
        items: 4,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 6.5,
      },
    },
    nav: false,
    dots: false,
  };

  // const data = await getRandomRecommendations()

  useEffect(() => {
    const getSongs = async () => {
      setIsLoading(true);

      const temp = await getRandomRecommendations();
      console.log(temp);

      setTracks(temp.tracks);
    };
    getSongs().then((res) => {
      setIsLoading(false);
    }).catch(err=>{
      setIsLoading(false)
      setError(err)
    });
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }
  if(error){

    return <h1>{error.message}</h1>
  }

  return (
    <Fragment>
      <SectionHeading text="Recommended" />
      <OwlCarousel className="owl-theme " loop margin={20} {...options}>
        {tracks.map((track) => (
          <RecSongCard track={track} key={track.id} />
        ))}
      </OwlCarousel>
    </Fragment>
  );
};


function Skeleton() {(
  <div className="relative rounded-2xl overflow-hidden item animate-pulse bg-gray-300">
    {/* Skeleton Image */}
    <div className="relative bg-gray-400 h-[200px]">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-400 opacity-60"></div>
      {/* Skeleton play button */}
      <div className="absolute bottom-[10px] right-3 w-[35px] h-[35px] rounded-full bg-gray-500 opacity-[.5] z-[9]"></div>
      <div className="absolute flex items-center justify-center bottom-[10px] right-3 w-[35px] h-[35px] rounded-full bg-gray-600 opacity-75 z-[9000]"></div>
    </div>

    {/* Skeleton Text Content */}
    <div className="mt-4">
      <h3 className="w-[60%] h-[20px] bg-gray-300 rounded-md animate-pulse mb-2"></h3>
      <p className="w-[40%] h-[15px] bg-gray-300 rounded-md animate-pulse"></p>
    </div>
  </div>
)};




function SkeletonLoader() {
  return (
    <Fragment>
      <SectionHeading text="Recommended" />
      <h1>Loading...</h1>
      <Skeleton/>
    </Fragment>
  );
}

export default RecSongsList;
