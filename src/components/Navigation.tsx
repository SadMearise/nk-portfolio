import { FC } from "react";

type NavItem = {
  href: string;
  title: string;
};

type Props = {
  className?: string;
  navItems: NavItem[];
};

const Navigation: FC<Props> = ({ className, navItems }) => {
  return (
    <nav className={className}>
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {navItems.map((navItem, index) => (
          <li
            className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
            key={index}
          >
            <a
              href={navItem.href}
              className="text-lg md:text-base hover:text-white transition-colors"
            >
              {navItem.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
