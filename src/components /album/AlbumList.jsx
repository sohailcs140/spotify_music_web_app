import AlbumItem from "./AlbumItem";
import SectionHeading from "../common/SectionHeading";
import { Fragment, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import { useState } from "react";
import Client from "../../api/axiosClient";

const AlbumList = () => {

  const [albums, setAlbums] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{

    const getAlbums = async() => {
        setIsLoading(true)
        

        const resp = await Client.get("browse/new-releases")
        // console.log(resp);
        
        if(resp.status == 200){
          setAlbums(resp.data?.albums)
        }

        setIsLoading(false)
    }
    
    getAlbums()
  }, [])





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

    if(isLoading){
      return <h1>Loading...</h1>
    }

    
    

    return (
        <Fragment>
            <SectionHeading text={"Top Album"}/>
            <OwlCarousel className='owl-theme ' loop margin={10} {...options}>
              {
                albums.items?.map((album)=>{
                  return <AlbumItem album={album} key={album.id}/>
                })
              }
                 <AlbumItem/>
            </OwlCarousel>
        </Fragment>
    );
}

export default AlbumList;
