import { FC } from "react";
import { cn } from "../utils/helpers";

type Props = {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

const burgerLines = [
  { open: "-rotate-45 -translate-y-1/2 top-1/2", closed: "top-[3px]" },
  { open: "opacity-0", closed: "top-[8px] opacity-100" },
  { open: "opacity-0", closed: "top-[13px] opacity-100" },
  { open: "rotate-45 -translate-y-1/2 top-1/2", closed: "top-[18px]" },
];

const BurgerButton: FC<Props> = ({ className, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none",
      )}
    >
      <div className="relative w-[23px] h-[23px] group">
        {burgerLines.map((line, index) => (
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
