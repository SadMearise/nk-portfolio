import { FC } from "react";
import { cn } from "../../utils/helpers";
import { BURGER_LINES } from "./constants";

type Props = {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton: FC<Props> = ({ className, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none",
      )}
    >
      <div className="group relative size-[23px]">
        {BURGER_LINES.map((line, index) => (
          <span
            key={index}
            className={cn("burger-line", isOpen ? line.open : line.closed)}
          />
        ))}
      </div>
    </button>
  );
};

export default BurgerButton;
