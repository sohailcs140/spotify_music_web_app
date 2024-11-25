import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile.svg";

const Profile = () => {
    return (
        <div className="hidden col-span-3 sm:flex items-center gap-4 justify-end lg:gap-12">
            <Link className={`bg-gradient-to-r from-variant-secondary to-variant-primary
                py-1 lg:px-6 rounded-full  text-primary hidden md:block
                md:px-3 md:text-xs lg:text-[.8rem]
                `}>
                Premium
            </Link>
            <img src={profileImage} alt="profile image" className={`
                w-[50px] h-[50px] rounded-full 
                border-transparent border-4 bg-gradient-to-tr from-variant-secondary via-variant-primary to-variant-primary
                
                `}/>
        </div>
    );
}

export default Profile;
