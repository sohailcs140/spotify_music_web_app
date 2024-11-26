import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import useSideMenuContext from "../../context/SideMenuContext";
import { Fragment } from "react";


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useSideMenuContext();

  return (
    <Fragment>
        {/* logo and menu toggler */}
    <div className="sm:hidden">
    <div className="flex justify-between">
        <Link to={"/"}>
          <img src={logoImage} alt="logo" srcSet="" />
        </Link>
        <button onClick={() => setIsOpen((pre) => !pre)}>
          <MenuIcon fontSize="large" />
        </button>
      </div>

    {/* mobile menu */}
    <div className={`pe absolute top-0 left-0 
        transform translate-x-[-100%] transition-all ease-in-out
          bg-green-600 z-[999]
        ${isOpen&&"translate-x-[0%]"}`}>
      {/* heading */}
      <div className="flex justify-between">
        <Link to={"/"}>
          <img src={logoImage} alt="logo" srcSet="" />
        </Link>
        <button onClick={() => setIsOpen((pre) => !pre)}>
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* links */}
      <div className="">


      </div>
    </div>
    </div>
    </Fragment>

  );
};

export default MobileMenu;
