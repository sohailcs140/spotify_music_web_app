import SongItem from "./SongItem";
import {useEffect, useState } from "react";
import Client from "../../api/axiosClient";
// playlists/37i9dQZF1DWVVz2xGWa9FP/tracks

const ChartItem = ({playlist}) => {
    
    const [traks, setTracks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{

        const getTracks = async ()=>{
            setIsLoading(true)

            const resp = await Client.get(`playlists/${playlist.id}/tracks?limit=10`)
            console.log(resp, "chartITems");
            
            if(resp.status == 200){
                setTracks(resp.data?.items)
            }
            setIsLoading(false)
        }

        getTracks()

    }, [])
    
    const songs = []



    return (
        <div className="flex gap-2 sm:gap-6 w-full">
            {/* left side */}
            <div className="relative rounded-lg overflow-hidden max-h-[300px] min-w-[50%] sm:min-w-[30%]">
                <img src={playlist?.images[0]?.url}   className="w-full h-full object-cover "/>
                <h2 className="absolute bottom-2 
                 text-[1rem] font-bold
                text-primary w-full text-center">{playlist.name}</h2>
            </div>
            {/* right side */}

            <div className="flex flex-col gap-3 pt-4 max-h-[300px] w-full overflow-y-auto">
                {
                    traks?.map((track , index)=> track.track && <SongItem number={index + 1} track={track.track} key={track.id} />
                        
                    )
                }
                
            </div>
        </div>
    );
}

export default ChartItem;
