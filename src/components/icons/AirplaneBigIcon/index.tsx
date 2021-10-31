import { IconProps } from "../../../@types/appPropTypes";

export const AirplaneBigIcon = ({
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
        d="M4.5 12.632L2.25 9.474H0L1.5 15 0 20.526h2.25l2.25-3.158h8.25L9 30h3l7.5-12.632h8.25c1.245 0 2.25-1.057 2.25-2.368 0-1.31-1.005-2.368-2.25-2.368H19.5L12 0H9l3.75 12.632H4.5z"
      />
    </svg>
  );
};
