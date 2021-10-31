import { IconProps } from "../../../@types/appPropTypes";

export const PersonIcon = ({
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
        d="M7.5 8.438c-2.503 0-7.5 1.256-7.5 3.75V15h15v-2.813c0-2.493-4.997-3.75-7.5-3.75zm5.719 4.78H1.78v-1.03c0-.6 2.935-1.97 5.719-1.97 2.784 0 5.719 1.37 5.719 1.97v1.03zM7.5 7.5a3.749 3.749 0 003.75-3.75A3.749 3.749 0 007.5 0a3.749 3.749 0 00-3.75 3.75A3.749 3.749 0 007.5 7.5zm0-5.719a1.969 1.969 0 110 3.937 1.969 1.969 0 010-3.937z"
      />
    </svg>
  );
};
