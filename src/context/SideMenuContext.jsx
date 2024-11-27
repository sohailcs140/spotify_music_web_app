import { createContext, useState, useContext } from "react";

export const sideMenuContext = createContext({
  isOpen: false,
  toggleSideMenu: () => {},
 
});

export const SideMenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <sideMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </sideMenuContext.Provider>
  );
};

const useSideMenuContext = () => {
  const { isOpen, setIsOpen } = useContext(sideMenuContext);

  return [isOpen, setIsOpen];
};

export default useSideMenuContext