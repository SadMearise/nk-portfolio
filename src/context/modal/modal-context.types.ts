export type ModalContextType<T> = {
  open: (value?: T) => void;
  close: () => void;
  isOpen: boolean;
  value: T | null;
};
