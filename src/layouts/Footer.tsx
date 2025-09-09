import { FC } from "react";
import { cn, getCurrentYear } from "../utils/helpers";
import { PROJECT_NAME, SOCIALS } from "../utils/constants";

type Props = {
  className?: string;
};

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={cn(className, "x-indent pb-3 text-sm text-neutral-400")}>
      <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="flex items-center">
        <span className="flex-[0_0_33.33%] gap-2">Privacy Police</span>
        <div className="flex flex-[0_0_33.33%] justify-center gap-3">
          {SOCIALS.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              className="hover-lift"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="size-5"
              />
            </a>
          ))}
        </div>
        <span className="block flex-[0_0_33.33%] text-end">
          © {getCurrentYear()} {PROJECT_NAME}. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
