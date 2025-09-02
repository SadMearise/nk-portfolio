import { createContext } from "react";
import { ModalContextType } from "./modal-context.types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalContext = createContext<ModalContextType<any>>({
  open: () => {
    throw new Error("ModalContext: open() called outside provider");
  },
  close: () => {
    throw new Error("ModalContext: close() called outside provider");
  },
  isOpen: false,
  value: null,
});
