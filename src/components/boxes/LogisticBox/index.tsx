import { LogisticBoxProps } from "../../../@types/appPropTypes";
import { getCityFromContext } from "../../../helpers/appHelpers";
import "./LogisticBox.scss";

export const LogisticBox = ({
  cities = [],
  cityId = 0,
  time,
}: LogisticBoxProps) => {
  const cityFrom = getCityFromContext(cityId, cities);

  return (
    <div className="logistic-box">
      <p className="logistic-box__time">{time}</p>
      {cities.length > 0 ? (
        <p className="logistic-box__city">
          {cityFrom?.name}, {cityFrom?.country}
        </p>
      ) : null}
    </div>
  );
};
