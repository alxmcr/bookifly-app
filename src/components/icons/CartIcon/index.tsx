import { IconProps } from "../../../@types/appPropTypes";

export const CartIcon = ({
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
        d="M10.908 8.25c.563 0 1.058-.308 1.313-.772l2.684-4.868a.747.747 0 00-.653-1.11H3.156L2.452 0H0v1.5h1.5l2.698 5.692-1.012 1.83c-.547 1.005.173 2.228 1.312 2.228h8.997v-1.5H4.498l.825-1.5h5.585zM3.868 3h9.11l-2.07 3.75H5.645L3.87 3zm.63 9c-.824 0-1.492.675-1.492 1.5S3.674 15 4.498 15c.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5zm7.497 0c-.824 0-1.491.675-1.491 1.5s.667 1.5 1.492 1.5c.824 0 1.499-.675 1.499-1.5s-.675-1.5-1.5-1.5z"
      />
    </svg>
  );
};
