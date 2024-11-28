import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const SearchInput = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    
    const handleSearchChange = (event)=>{
        
        setQuery(event.target.value)
    }


    useEffect(()=>{
        if(query){
            navigate("search?q="+query)
        }else{
            navigate("/")
        }
    },[query])


  return (
    <div className="md:col-span-9 col-span-12 border p-3 rounded-lg mt-4 sm:mt-0 flex gap-4 text-color-light-dim ">
      <SearchIcon className="" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search artist, title, album"
        onChange={handleSearchChange}
        className={`
                 outline-none  border-none w-full bg-transparent
                `}
      />
    </div>
  );
};

export default SearchInput;
