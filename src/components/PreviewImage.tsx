import { FC, ImgHTMLAttributes } from "react";
import { cn } from "../utils/helpers";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

const PreviewImage: FC<Props> = ({ className, ...props }) => {
  return (
    <img
      className={cn(
        className,
        "pointer-events-none h-56 w-80 rounded-lg object-cover shadow-lg will-change-transform",
      )}
      {...props}
    />
  );
};

export default PreviewImage;
