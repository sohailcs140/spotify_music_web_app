import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import useSideMenuContext from "../../context/SideMenuContext";
import { Fragment } from "react";
import MenuItem from "./MenuItem";
import MeneHeading from "./MeneHeading";
import HomeIcon from "@mui/icons-material/Home";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useSideMenuContext();

  return (
    <Fragment>
        {/* logo and menu toggler */}
    <div className="sm:hidden pe">
    <div className="flex justify-between">
        <Link to={"/"}>
          <img src={logoImage} alt="logo" srcSet="" />
        </Link>
        <button onClick={() => setIsOpen((pre) => !pre)}>
          <MenuIcon fontSize="large" />
        </button>
      </div>

    {/* mobile menu */}
    <div className={`pe absolute top-5 left-0 overflow-hidden
        transform translate-x-[-100%] transition-all ease-in-out
        h-screen z-[999999]
        ps-2 pe-2
        bg-primary shadow-md
        w-[86%]
        ${isOpen&&"translate-x-[0%]"}`}>
      {/* heading */}
      <div className="flex justify-between">
        <Link to={"/"}>
          <img src={logoImage} alt="logo" srcSet="" />
        </Link>
        <button onClick={() => setIsOpen((pre) => !pre)}>
          <CloseIcon fontSize="large" />
        </button>
      </div>

      {/* links */}
      <div className="mt-4 max-h-[100%] overflow-auto">

        <MeneHeading text="Discover" />
        <MenuItem href={"/"} title={"home"} active={true} Icon={HomeIcon} />
       
      </div>
    </div>
    </div>
    </Fragment>

  );
};

export default MobileMenu;
