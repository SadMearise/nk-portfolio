import { FC, useState } from "react";
import { cn } from "../utils/helpers";
import { motion } from "motion/react";
import { BurgerButton, Logo, Navigation } from "../components";

type Props = {
  className?: string;
};

const navItems = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#work", title: "Work" },
  { href: "#contacts", title: "Contacts" },
];

const Header: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <div className={cn(className, "fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40")}>
      <div className="mx-auto x-indent max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Logo />
          <BurgerButton
            isOpen={isOpen}
            onClick={toggleMobileMenu}
            className="sm:hidden"
          />
          <Navigation
            navItems={navItems}
            className="sm:block hidden"
          />
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-auto text-center sm:hidden max-h-screen"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation navItems={navItems} />
        </motion.div>
      )}
    </div>
  );
};

export default Header;
