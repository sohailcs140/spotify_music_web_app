
import SectionHeading from '../common/SectionHeading';
import RecSongCard from './RecSongCard';
import { Fragment } from 'react';
import Song1 from "../../assets/images/rec_song_1.svg";
import Song2 from "../../assets/images/rec_song_2.svg";
import Song3 from "../../assets/images/rec_song_3.svg";
import Song4 from "../../assets/images/rec_song_4.svg";
import Song5 from "../../assets/images/rec_song_5.svg";
import Song6 from "../../assets/images/rec_song_6.svg";



const RecSongsList = () => {
    return (
        <Fragment>
            <SectionHeading text="Recommended"/>
            <div className="flex gap-12">
                <RecSongCard image={Song1} title={"Jiwa yang Bersedih"} artist={"Ghea Indrawati"} isPlay={false}/>
                <RecSongCard image={Song2} title={"Rayuan Perempuan Gila"} artist={"Nadin Amizah"} isPlay={false}/>
                <RecSongCard image={Song3} title={"Sial"} artist={"Mahalini"} isPlay={false}/>
                <RecSongCard image={Song4} title={"Janji Setia"} artist={"Tiara Andini"} isPlay={true}/>
                <RecSongCard image={Song5} title={"Super Shy"} artist={"NewJeans"} isPlay={false}/>
                <RecSongCard image={Song6} title={"Seperti Kiash"} artist={"NewJeans"} isPlay={false}/>
            </div>
            
        </Fragment>
    );
}

export default RecSongsList;
