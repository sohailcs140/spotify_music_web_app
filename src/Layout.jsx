import { Outlet } from "react-router";
import SideMenu from "./components /side-menu/SideMenu";
import Header from "./components /header/Header";
import MobileMenu from "./components /side-menu/MobileMenu";
import Player from "./components /Player/Player";
import { SideMenuContextProvider } from "./context/SideMenuContext";
import { TrackContextProvider } from "./context/TrackContext";


const Layout = () => {

  return (
    <div className="">
      
        <SideMenuContextProvider>
        {/* <TrackContextProvider> */}
          <SideMenu />
          <main className="w-full absolute sm:w-[82%] right-0 top-0 pst shadow-gray min-h-screen">
            <MobileMenu />
            <Header />
            <Outlet />
          </main>
          <Player playlist={["https://p.scdn.co/mp3-preview/768a48a8bae14021677b8f6581218b585feaaed3?cid=a77073181b7d48eb90003e3bb94ff88a"]}/>
          {/* </TrackContextProvider> */}
        </SideMenuContextProvider>
        
    </div>
  );
};

export default Layout;
