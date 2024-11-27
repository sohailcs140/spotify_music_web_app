import OwlCarousel from 'react-owl-carousel';

import ChartItem from "./ChartItem";
import SectionHeading from '../common/SectionHeading';
import tumbnailImage1  from "../../assets/images/imgChart2.svg"
import tumbnailImage2 from "../../assets/images/imgChart1.svg"
import { useEffect, useState } from 'react';
import Client from '../../api/axiosClient';


const TopChartList = () => {

  const [feturePlayList, setFeturePlayList] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
      const getFeturePlayList = async()=>{
        setIsLoading(true)
        const resp = await Client.get("browse/featured-playlists?limit=10")
        
        if(resp.status == 200){
          console.log(resp, "ChartList");
          
          setFeturePlayList(resp.data.playlists?.items)
        }

        setIsLoading(false)
      }

      getFeturePlayList()
  }, [])


    


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



    const songs = [
        {title:"Sial", artist:"Mahalini", duration:"4:03", isPlay:false, number:"1"},
        {title:"Rayuan Perempuan Gila", artist:"Nadin Amizah ", duration:"5:20", isPlay:false, number:"2"},
        {title:"Jiwa yang Bersedih", artist:"Ghea Indrawati ", duration:"4:38", isPlay:false, number:"3"},        
        {title:"Komang", artist:"Raim Laude", duration:"3:42", isPlay:false, number:"4"},
    ]    

    return (
        <div className="pe">
            <SectionHeading text={"Top Chart This Week"}/>
            <OwlCarousel className='owl-theme'   margin={25} {...options}>
              {
                feturePlayList?.map((playlist)=>{

                  return  <ChartItem playlist={playlist} key={playlist.id}/>
                })
              }
               
                
            </OwlCarousel>
        </div>
    );
}

export default TopChartList;
