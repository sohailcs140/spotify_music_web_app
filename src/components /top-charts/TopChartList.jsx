import OwlCarousel from 'react-owl-carousel';

import ChartItem from "./ChartItem";
import SectionHeading from '../common/SectionHeading';
import tumbnailImage1  from "../../assets/images/imgChart2.svg"
import tumbnailImage2 from "../../assets/images/imgChart1.svg"

const TopChartList = () => {


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
                <ChartItem songs={songs} tumbImage={tumbnailImage1} tumbTitle={"100 TOP Hits"}/>
                <ChartItem songs={songs} tumbImage={tumbnailImage2} tumbTitle={"100 TOP Hits"}/>
                <ChartItem songs={songs} tumbImage={tumbnailImage1} tumbTitle={"100 TOP Hits"}/>
            </OwlCarousel>
        </div>
    );
}

export default TopChartList;
