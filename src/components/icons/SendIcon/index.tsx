import { IconProps } from "../../../@types/appPropTypes";

export const SendIcon = ({
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
        d="M5.122 9.207l-3.243-7.5 15 7.5-15 7.5 3.243-7.5zm0 0h3.617"
        stroke="#000"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
