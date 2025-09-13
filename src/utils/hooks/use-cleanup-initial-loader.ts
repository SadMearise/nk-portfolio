import { useEffect } from "react";

const useCleanupInitialLoader = () => {
  useEffect(() => {
    const removeLoader = () => {
      const loader = document.getElementById("initial-loader");

      if (loader) {
        loader.remove();
      }
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(removeLoader);

      return;
    }

    window.addEventListener("load", removeLoader);

    return () => window.removeEventListener("load", removeLoader);
  }, []);
};

export default useCleanupInitialLoader;
