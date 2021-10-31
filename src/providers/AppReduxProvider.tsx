import { Provider } from "react-redux";
import { AppReduxProviderProps } from "../@types/appReduxTypes";
import { appReduxStore } from "../redux/store";

export const AppReduxProvider = ({ children }: AppReduxProviderProps) => {
  return <Provider store={appReduxStore}>{children}</Provider>;
};
