import { FC, ImgHTMLAttributes } from "react";
import { cn } from "../utils/helpers";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

const RoundedIcon: FC<Props> = ({ className, ...props }) => {
  return (
    <img
      className={cn(className, "rounded-sm duration-200 hover:scale-110")}
      {...props}
    />
  );
};

export default RoundedIcon;
