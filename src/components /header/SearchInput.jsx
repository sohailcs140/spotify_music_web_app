import SearchIcon from '@mui/icons-material/Search';
const SearchInput = () => {
    return (
        <div className="col-span-9 border p-3 rounded-lg sm:flex gap-4 text-color-light-dim  hidden ">
            <SearchIcon className=""/>
            <input type="search" name="search" id="search"  placeholder="Search artist, title, album" className={`
                 outline-none  border-none w-full bg-transparent
                `}/>
        </div>
    );
};


export default SearchInput;
