import { FC, PropsWithChildren } from "react";
import { ModalContext } from "./modal-context";
import { useModal } from "../../utils/hooks";

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, open, close, value } = useModal();

  const contextValue = { isOpen, open, close, value };

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
