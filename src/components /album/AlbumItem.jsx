import album1 from "../../assets/images/album1.svg"
const AlbumItem = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <img src={album1} alt=""  className=" h-auto rounded-full max-w-[200px]"/>
            <h3 className="font-medium text-[.8rem] text-color-primary">Yura Yunita</h3>
        </div>
    );
}

export default AlbumItem;
