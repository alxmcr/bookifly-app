import { createContext, useState } from "react";
import {
  OverlayContextProps,
  OverlayProviderProps,
} from "../@types/appContextTypes";

const initialOverlayState: OverlayContextProps = {
  showOverlay: false,
  setShowOverlay: () => {},
};

export const OverlayContext = createContext(initialOverlayState);

export const OverlayProvider = ({ children }: OverlayProviderProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const value: OverlayContextProps = { showOverlay, setShowOverlay };

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
};
