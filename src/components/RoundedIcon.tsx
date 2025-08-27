import { FC } from "react";
import { cn } from "../utils/helpers";

type Props = {
  className?: string;
  src: string;
};

const RoundedIcon: FC<Props> = ({ className, src }) => {
  return (
    <img
      src={src}
      className={cn(className, "rounded-sm duration-200 hover:scale-110")}
    />
  );
};

export default RoundedIcon;
