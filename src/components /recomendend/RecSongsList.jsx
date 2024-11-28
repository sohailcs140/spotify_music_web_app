import SectionHeading from "../common/SectionHeading";
import RecSongCard from "./RecSongCard";
import { Fragment, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import { getRandomRecommendations } from "../../api/dashboard";
import { useEffect } from "react";

const RecSongsList = ({ tracksList = undefined, textTitle = "" }) => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  useEffect(() => {
    const getSongs = async () => {
      setIsLoading(true);

      const temp = await getRandomRecommendations();

      setTracks(temp.tracks.items);
    };

    if(!tracksList){
      getSongs()
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
    }
    
  }, []);

  if (isLoading) {
    return <RecSongSkeletonLoader textTitle={textTitle}/>;
  }


  return (
    <Fragment>
      <SectionHeading text={textTitle ? textTitle : "Recommended"} />
      <OwlCarousel className="owl-theme " loop margin={20} {...options}>
        {tracksList
          ? tracksList.map((track) => (
              <RecSongCard track={track} key={track.id} />
            ))
          : tracks?.map((track) => (
              <RecSongCard track={track} key={track.id} />
            ))}
      </OwlCarousel>
    </Fragment>
  );
};

export function RecSongSkeletonLoader({textTitle}) {
  return (
    <Fragment>
     <SectionHeading text={textTitle ? textTitle : "Recommended"} />
      <div className=" flex gap-4">
      <RecSongCardSkeleton />
      <RecSongCardSkeleton />
      <RecSongCardSkeleton /> 
      </div>
    </Fragment>
  );
}

function RecSongCardSkeleton() {
  return (
    <div className="relative rounded-2xl overflow-hidden item w-[300px]">
      <div className="relative w-full h-48 bg-gray-300 animate-pulse">
        <div className="w-full h-full bg-gray-400 animate-pulse" />
      </div>
      <div className="mt-4">
        <div className="h-4 w-32 bg-gray-300 animate-pulse mb-2"></div>{" "}
        <div className="h-3 w-24 bg-gray-300 animate-pulse"></div>{" "}
      </div>
    </div>
  );
}

export default RecSongsList;
