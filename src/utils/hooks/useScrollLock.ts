import { useEffect } from "react";

const useScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen) return;

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const header = document.querySelector("header");

    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPaddingRight = document.body.style.paddingRight;
    const originalHeaderPaddingRight = header?.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    if (header) {
      header.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;

      if (header) {
        header.style.paddingRight = originalHeaderPaddingRight!;
      }
    };
  }, [isOpen]);
};

export default useScrollLock;
