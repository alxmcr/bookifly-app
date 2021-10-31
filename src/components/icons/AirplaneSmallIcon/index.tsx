import { IconProps } from "../../../@types/appPropTypes";

export const AirplaneSmallIcon = ({
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
        d="M2.25 6.316l-1.125-1.58H0L.75 7.5 0 10.263h1.125L2.25 8.684h4.125L4.5 15H6l3.75-6.316h4.125C14.498 8.684 15 8.155 15 7.5c0-.655-.502-1.184-1.125-1.184H9.75L6 0H4.5l1.875 6.316H2.25z"
      />
    </svg>
  );
};
