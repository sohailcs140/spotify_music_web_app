import AlbumItem from "./AlbumItem";
import SectionHeading from "../common/SectionHeading";
import { Fragment } from "react";
import OwlCarousel from 'react-owl-carousel';

const AlbumList = () => {

    const options = {
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          600: {
            items: 1,
          },
          700: {
            items: 3,
          },
          800: {
            items: 4,
          },
          1000: {
            items: 6,
          }
        },
        nav: false,
        dots: false
      }



    return (
        <Fragment>
            <SectionHeading text={"Top Album"}/>
            <OwlCarousel className='owl-theme ' loop margin={10} {...options}>
                 <AlbumItem/>
            </OwlCarousel>
        </Fragment>
    );
}

export default AlbumList;
