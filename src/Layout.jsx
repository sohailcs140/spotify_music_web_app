import { Outlet } from "react-router";

import SideMenu from "./components /side-menu/SideMenu";
import Header from "./components /header/Header";
import MobileMenu from "./components /side-menu/MobileMenu";

const Layout = () => {
  return (
    <div className="h-screen">
      <SideMenu />
      <main className="h-[100%] w-full absolute sm:w-[82%] right-0 top-0 pst shadow-gray">
        <MobileMenu />

        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
