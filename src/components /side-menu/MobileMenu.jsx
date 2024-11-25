
import { Link } from "react-router-dom";

const MobileMenu = () => {
    return (
        <div className="flex justify-between sm:hidden">
            <Link to={"/"}>LoGo</Link>
            <button>LoGo</button>
        </div>
    );
};




export default MobileMenu;
