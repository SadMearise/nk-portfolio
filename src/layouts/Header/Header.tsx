import { FC, useState } from "react";
import { cn } from "../../utils/helpers";
import { AnimatePresence, motion } from "motion/react";
import { BurgerButton, Logo, Navigation } from "../../components";
import { useOnScroll } from "../../utils/hooks";
import { NAV_ITEMS } from "./constants";

type Props = {
  className?: string;
};

const Header: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  useOnScroll(closeMobileMenu);

  return (
    <header className={cn(className, "w-full bg-primary/40 backdrop-blur-lg")}>
      <div className="x-indent mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Logo />
          <BurgerButton
            isOpen={isOpen}
            onClick={toggleMobileMenu}
            className="sm:hidden"
          />
          <Navigation
            navItems={NAV_ITEMS}
            className="hidden sm:block"
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="max-h-screen overflow-hidden text-center"
            initial={{ opacity: 0, x: -10, height: 0 }}
            animate={{ opacity: 1, x: 0, height: "auto" }}
            exit={{ opacity: 0, x: -10, height: 0 }}
            transition={{
              x: { duration: 0.4, delay: 0.1 },
              height: { duration: 0.2 },
              opacity: { duration: 0.4, delay: 0.1 },
            }}
          >
            <Navigation navItems={NAV_ITEMS} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
