import { IconProps } from "../../../@types/appPropTypes";

export const LocationIcon = ({
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
        d="M6.5 0C9.912 0 13 2.415 13 6.15c0 2.49-2.17 5.438-6.5 8.85C2.17 11.588 0 8.64 0 6.15 0 2.415 3.087 0 6.5 0zm4.875 6.15c0-2.723-2.153-4.65-4.875-4.65S1.625 3.428 1.625 6.15c0 1.755 1.584 4.08 4.875 6.855 3.29-2.775 4.875-5.1 4.875-6.855zM6.5 7.5c-.894 0-1.625-.675-1.625-1.5S5.606 4.5 6.5 4.5s1.625.675 1.625 1.5S7.394 7.5 6.5 7.5z"
      />
    </svg>
  );
};
