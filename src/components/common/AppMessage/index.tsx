import { AppMessageProps } from "../../../@types/appPropTypes";
import "./AppMessage.scss";

export const AppMessage = ({
  type = "message",
  message = "",
}: AppMessageProps) => {
  const classname = `app-message app-message--${type}`;

  return (
    <div className="app-message">
      <p className={classname}>{message}</p>
    </div>
  );
};
