import { FC } from "react";
import { cn } from "../utils/helpers";
import { PROJECT_NAME } from "../utils/constants";

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  return (
    <a
      href="/"
      className={cn(
        className,
        "text-xl font-bold text-neutral-400 transition-colors hover:text-white",
      )}
    >
      {PROJECT_NAME}
    </a>
  );
};

export default Logo;
