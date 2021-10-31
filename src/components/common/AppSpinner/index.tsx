import { AppSpinnerProps } from "../../../@types/appPropTypes";
import "./AppSpinner.scss";

export const AppSpinner = ({ color = "primary" }: AppSpinnerProps) => {
  const initialClassName = `balls__ball balls__ball--${color}`;
  return (
    <section className="balls">
      <span className={`${initialClassName} balls__ball--one`}></span>
      <span className={`${initialClassName} balls__ball--two`}></span>
      <span className={`${initialClassName} balls__ball--three`}></span>
      <span className={`${initialClassName} balls__ball--four`}></span>
      <span className={`${initialClassName} balls__ball--five`}></span>
      <span className={`${initialClassName} balls__ball--six`}></span>
      <span className={`${initialClassName} balls__ball--seven`}></span>
      <span className={`${initialClassName} balls__ball--eight`}></span>
    </section>
  );
};
