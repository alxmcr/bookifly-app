import { IconProps } from "../../../@types/appPropTypes";

export const RemoveIcon = ({
  className = "",
  width = 40,
  height = 40,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.667 7.665v8.999a3 3 0 01-3 3H5.334a3 3 0 01-3-3V7.665M1 3.667h16M7.667 1h2.667M5.581 8.999v6.665M9 8.999v6.665m3.291-6.665v6.665"
        stroke="#000"
        strokeWidth={0.7}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
