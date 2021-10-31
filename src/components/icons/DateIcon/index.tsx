import { IconProps } from "../../../@types/appPropTypes";

export const DateIcon = ({
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
        d="M1.49 5.714h10.431v1.429h1.49V2.857c0-.786-.67-1.428-1.49-1.428h-.745V0h-1.49v1.429h-5.96V0h-1.49v1.429H1.49c-.827 0-1.483.642-1.483 1.428l-.007 10c0 .786.663 1.429 1.49 1.429h5.216v-1.429H1.49V5.714zm0-2.857h10.431v1.429H1.491V2.857zM14.782 10.2l-.529.507-1.58-1.514.53-.507a.765.765 0 011.05 0l.53.507a.69.69 0 010 1.007zm-2.637-.5l1.58 1.514L9.774 15h-1.58v-1.514l3.95-3.786z"
      />
    </svg>
  );
};
