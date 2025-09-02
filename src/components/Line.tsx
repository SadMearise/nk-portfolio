import { FC } from "react";
import { cn } from "../utils/helpers";

type Props = {
  className?: string;
};

const Line: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        "h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent",
      )}
    />
  );
};

export default Line;
