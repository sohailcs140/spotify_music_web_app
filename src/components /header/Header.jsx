import SearchInput from "./SearchInput";
import Profile from "./Profile";

const Header = () => {
    return (
        <header className="pe grid grid-cols-12 ">
            <SearchInput/>
            <Profile/>
        </header>
    );
}

export default Header;
