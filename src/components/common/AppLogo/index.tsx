import { Link } from "react-router-dom";
import logo from "../../../assets/svg/logo-airplane.svg";
import "./AppLogo.scss";

export const AppLogo = () => {
  return (
    <div className="app-logo">
      <Link to="/" className="app-logo__link">
        <img src={logo} alt="logo" className="app-logo__image" />
      </Link>
      <Link to="/" className="app-logo__link app-logo__link--name">
        Bookifly
      </Link>
    </div>
  );
};
