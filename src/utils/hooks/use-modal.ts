import { useState } from "react";

const useModal = <T>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<T | null>(null);

  const open = (value?: T) => {
    if (value !== undefined) {
      setValue(value);
    }

    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setValue(null);
  };

  return { isOpen, open, close, value };
};

export default useModal;
