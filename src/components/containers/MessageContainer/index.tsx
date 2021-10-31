import { MessageContainerProps } from "../../../@types/appPropTypes";
import { AppMessage } from "../../common/AppMessage";
import "./MessageContainer.scss";

export const MessageContainer = ({
  type = "message",
  message,
  children
}: MessageContainerProps) => {
  return (
    <section className="message-container">
      <AppMessage type={type} message={message} />
      {children}
    </section>
  );
};
