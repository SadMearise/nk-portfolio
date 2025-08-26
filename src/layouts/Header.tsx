import { FC, useState } from "react";
import { cn } from "../utils/helpers";
import { AnimatePresence, motion } from "motion/react";
import { BurgerButton, Logo, Navigation } from "../components";
import { useOnScroll } from "../utils/hooks";

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
  const closeMobileMenu = () => setIsOpen(false);

  useOnScroll(closeMobileMenu);

  return (
    <header className={cn(className, "inset-x-0 w-full backdrop-blur-lg bg-primary/40")}>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-center max-h-screen"
            initial={{ opacity: 0, x: -10, height: 0 }}
            animate={{ opacity: 1, x: 0, height: "auto" }}
            exit={{ opacity: 0, x: -10, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navigation navItems={navItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
