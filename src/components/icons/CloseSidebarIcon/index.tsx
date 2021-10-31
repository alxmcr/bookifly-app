import { IconProps } from "../../../@types/appPropTypes";

export const CloseSidebarIcon = ({
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
        d="M9.599 7.442l4.228 4.228-4.228 4.228M11 1.67c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z"
        strokeWidth={1.7}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
