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
      <ul className="relative z-20 flex flex-col items-center gap-4 sm:flex-row md:gap-6">
        {navItems.map((navItem, index) => (
          <li
            className="py-2 text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md max-sm:px-5"
            key={index}
          >
            <a
              href={navItem.href}
              className="text-lg transition-colors hover:text-white md:text-base"
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
