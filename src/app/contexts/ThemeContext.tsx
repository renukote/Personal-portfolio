"use client";
import { createContext, ReactNode, useState } from "react";
import { themeData } from "../data/themeData";

interface ThemeContextProviderArgs {
  children: ReactNode;
}

const defaultContextValues = {
  theme: themeData.theme,
  drawerOpen: false,
  setHandleDrawer: () => {},
};

export const ThemeContext = createContext(defaultContextValues);

function ThemeContextProvider({ children }: ThemeContextProviderArgs) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme } = themeData;

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { theme, drawerOpen, setHandleDrawer };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
