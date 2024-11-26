import { Outlet } from "react-router";

import SideMenu from "./components /side-menu/SideMenu";
import Header from "./components /header/Header";
import MobileMenu from "./components /side-menu/MobileMenu";
import Player from "./components /Player/Player";
import { SideMenuContextProvider } from "./context/SideMenuContext";

const Layout = () => {
  return (
    <div className="">
      <SideMenuContextProvider>
        <SideMenu />
        <main className="w-full absolute sm:w-[82%] right-0 top-0 pst shadow-gray min-h-screen">
          <MobileMenu />
          <Header />
          <Outlet />
        </main>
        <Player />
      </SideMenuContextProvider>
    </div>
  );
};

export default Layout;
