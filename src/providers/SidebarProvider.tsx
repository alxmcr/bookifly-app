import { createContext, useState } from "react";
import {
  SidebarContextProps,
  SidebarProviderProps,
} from "../@types/appContextTypes";

const initialSidebarState: SidebarContextProps = {
  showSidebar: false,
  setShowSidebar: () => {},
};

export const SidebarContext = createContext(
  initialSidebarState
);

export const SidebarProvider = ({
  children,
}: SidebarProviderProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const value: SidebarContextProps = { showSidebar, setShowSidebar };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};
