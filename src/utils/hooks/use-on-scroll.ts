import { useEffect } from "react";

const useOnScroll = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback]);
};

export default useOnScroll;
