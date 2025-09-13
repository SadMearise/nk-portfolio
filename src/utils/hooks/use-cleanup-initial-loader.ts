import { useEffect } from "react";

const useCleanupInitialLoader = () => {
  useEffect(() => {
    const loader = document.getElementById("initial-loader");

    window.addEventListener("load", () => {
      if (loader) {
        loader.remove();
      }
    });
  }, []);
};

export default useCleanupInitialLoader;
