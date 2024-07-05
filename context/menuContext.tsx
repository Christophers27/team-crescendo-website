"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type MenuContextProps = {
  children: ReactNode;
};

type MenuContextType = {
  showNav: boolean;
  toggleNav: () => void;
};

const MenuContext = createContext<MenuContextType | null>(null);

export default function MenuContextProvider({ children }: MenuContextProps) {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);

  return (
    <MenuContext.Provider value={{ showNav, toggleNav }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }

  return context;
}
