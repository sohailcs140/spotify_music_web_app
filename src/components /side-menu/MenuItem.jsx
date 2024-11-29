import React from 'react';
import { Link } from 'react-router-dom';


const MenuItem = ({href, title, active, Icon}) => {


    return (
        <Link to={href} className={`
        flex gap-3 items-center
        lg:text-[.9rem] text-color-light-dim
        font-medium capitalize lg:p-[1rem] 
        rounded-lg transition-all ease-in mt-2
        w-[80%] sm:w-full
        md:p-[.4rem]
        md:[.7rem]
        sm:text-[.5rem]
        p-[1rem]
        hover:text-primary hover:bg-gradient-to-r hover:to-variant-primary hover:from-variant-secondary
        ${active?"font-[700] text-primary bg-gradient-to-r to-variant-primary from-variant-secondary":"font-medium text-color-light-dim"}
        `}>
            
            <Icon className="sm:text-[.5rem] md:[.7rem]"/>
            {title}
        </Link>
    );
};





export default MenuItem;
