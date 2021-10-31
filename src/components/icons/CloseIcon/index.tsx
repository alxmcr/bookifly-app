import { IconProps } from "../../../@types/appPropTypes";

export const CloseIcon = ({
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
        d="M1 1l10.666 10.664M1 11.664L11.666 1"
        strokeWidth={1.2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
