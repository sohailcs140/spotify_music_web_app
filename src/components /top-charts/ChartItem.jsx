import SongItem from "./SongItem";

const ChartItem = ({tumbImage,tumbTitle, songs=[]}) => {
    return (
        <div className="flex gap-2 sm:gap-6 w-full">
            {/* left side */}
            <div className="relative rounded-lg overflow-hidden min-w-[50%] sm:min-w-[30%]">
                <img src={tumbImage}   className="w-full h-full object-cover "/>
                <h2 className="absolute bottom-2 
                 text-[1rem] font-bold
                text-primary w-full text-center">{tumbTitle}</h2>
            </div>
            {/* right side */}

            <div className="flex flex-col gap-3 pt-4 w-full">
                {
                    songs.map(song => <SongItem  title={song.title} artist={song.artist} 
                        duration={song.duration} tumbImage={tumbImage} isPlay={song.isPlay}
                        number={song.number}
                        key={song.number}
                        />
                    )
                }
                
            </div>
        </div>
    );
}

export default ChartItem;
