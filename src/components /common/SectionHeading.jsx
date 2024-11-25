import { Link } from "react-router-dom";


const SectionHeading = ({text, href="/"}) => {
    return (
        <div className="flex justify-between items-center pe my-6">
            <h2 className="text-[1.4rem] font-medium text-color-primary">{text}</h2>
            <Link to={href} className="text-[.9rem] text-variant-primary font-semibold">
            View All
            </Link>
        </div>
    );
}

export default SectionHeading;
