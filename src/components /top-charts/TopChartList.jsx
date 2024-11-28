import OwlCarousel from 'react-owl-carousel';

import ChartItem from "./ChartItem";
import SectionHeading from '../common/SectionHeading';
import tumbnailImage1  from "../../assets/images/imgChart2.svg"
import tumbnailImage2 from "../../assets/images/imgChart1.svg"
import { useEffect, useState, Fragment} from 'react';
import Client from '../../api/axiosClient';


const TopChartList = ({playlists=undefined, title=""}) => {

  const [feturePlayList, setFeturePlayList] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
      const getFeturePlayList = async()=>{
        try{
          setIsLoading(true)
          const resp = await Client.get("search?q=songs&type=playlist&limit=10")
          
          if(resp.status == 200){
            console.log(resp, "ChartList");
            setFeturePlayList(resp.data.playlists.items)
          }
  
          setIsLoading(false)
        }catch(error){
          console.log(error);
          
        }finally{
          setIsLoading(false)
        }
      
      }
      if(! playlists){
        getFeturePlayList()
      }
      
  }, [])


    
  if(isLoading){
    return <TopChartSkeletonLoader textTitle={title}/>
  }


    const options = {
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          600: {
            items: 1,
          },
          700: {
            items: 1,
          },
          800: {
            items: 1,
          },
          1000: {
            items: 2,
          }
        },
        nav: false,
        dots: false
      }


    return (
        <div className="">
            <SectionHeading text={title?title:"Top Chart This Week"}/>
            <OwlCarousel className='owl-theme'   margin={25} {...options}>
              {
               !playlists && feturePlayList?.map((playlist)=>{

                  return  playlist && <ChartItem playlist={playlist} key={playlist?.id}/>
                })
              }
              {
               playlists?.map((playlist)=>{
                
                  return  playlist && <ChartItem playlist={playlist} key={playlist?.id}/>
                })
              }
                
            </OwlCarousel>
        </div>
    );
}


export function TopChartSkeletonLoader({textTitle}) {
  return (
    <Fragment>
     <SectionHeading text={textTitle ? textTitle : "Top Playlists"} />
      <div className="grid grid-cols-2">
      <TopChartSkeleton />
      <TopChartSkeleton />
      </div>
    </Fragment>
  );
}

function TopChartSkeleton(){

  return <div className="flex gap-2 sm:gap-6 w-full">
    <div className="relative rounded-lg overflow-hidden max-h-[300px] min-w-[50%] sm:min-w-[30%]">
        <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
        
        <div className="absolute bottom-2 text-[1rem] font-bold text-primary w-full text-center">
            <div className="w-3/4 h-4 bg-gray-300 animate-pulse mx-auto"></div>
        </div>
    </div>

    <div className="flex flex-col gap-3 pt-4 max-h-[300px] w-full overflow-y-auto">
        {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex gap-3 items-center animate-pulse">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>

                <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
            </div>
        ))}
    </div>
</div>
}



export default TopChartList;
