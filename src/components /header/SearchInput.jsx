import SearchIcon from '@mui/icons-material/Search';
const SearchInput = () => {
    return (
        <div className="md:col-span-9 col-span-12 border p-3 rounded-lg mt-4 sm:mt-0 flex gap-4 text-color-light-dim ">
            <SearchIcon className=""/>
            <input type="search" name="search" id="search"  placeholder="Search artist, title, album" className={`
                 outline-none  border-none w-full bg-transparent
                `}/>
        </div>
    );
};


export default SearchInput;
