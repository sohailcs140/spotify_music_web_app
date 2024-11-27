
const AlbumItem = ({album}) => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <img src={album?.images[0]?.url} alt=""  className=" h-auto rounded-full max-w-[200px]"/>
            <h3 className="font-medium text-[.8rem] text-color-primary">
            {album?.artists.map((artist) => artist.name).join(", ")}
            </h3>
        </div>
    );
}

export default AlbumItem;
