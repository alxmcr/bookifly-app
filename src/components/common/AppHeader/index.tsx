import { AppLogo } from "../AppLogo";
import { AppNavegation } from "../AppNavegation";
import "./AppHeader.scss";

export const AppHeader = () => {
  return (
    <header className="app-header">
      <AppLogo />
      <AppNavegation />
    </header>
  );
};
