import HomeIcon from '@mui/icons-material/Home';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

import logoImage from "../../assets/images/logo.svg";
import MeneHeading from "./MeneHeading";
import MenuItem from "./MenuItem";

const SideMenu = () => {
    return (
        <div className={`hidden max-h-screen 
            overflow-auto sm:block absolute top-0 
            left-0  h-screen 
            lg:px pt
            md:px-3
            sm:px-2
            w-[18%]
            `}>
           
           <div className="">
                <img src={logoImage} alt="logo" className="w-full lg:w-[60%]"/>
           </div>

           <div className="mt-6 ">
            <MeneHeading text="Discover"/>
            <MenuItem href={"/"} title={"home"} active={true} Icon={HomeIcon}/>
            <MenuItem href={"/"} title={"Artist"} active={false} Icon={MicOutlinedIcon}/>
            <MenuItem href={"/"} title={"Album"} active={false} Icon={LibraryMusicOutlinedIcon}/>
            <MenuItem href={"/"} title={"Audio Book"} active={false} Icon={AutoStoriesOutlinedIcon}/>
            <MeneHeading text="Library"/>
            <MenuItem href={"/"} title={"home"} active={false} Icon={HomeIcon}/>
            <MenuItem href={"/"} title={"Artist"} active={false} Icon={MicOutlinedIcon}/>
            <MenuItem href={"/"} title={"Album"} active={false} Icon={LibraryMusicOutlinedIcon}/>
            <MenuItem href={"/"} title={"Audio Book"} active={false} Icon={AutoStoriesOutlinedIcon}/>
            <MeneHeading text="More"/>
            <MenuItem href={"/"} title={"home"} active={false} Icon={HomeIcon}/>
            <MenuItem href={"/"} title={"Artist"} active={false} Icon={MicOutlinedIcon}/>
            <MenuItem href={"/"} title={"Album"} active={false} Icon={LibraryMusicOutlinedIcon}/>


            
           </div>

        </div>
    );
}

export default SideMenu;
