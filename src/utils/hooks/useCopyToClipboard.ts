import { useState, useEffect } from "react";

const useCopyToClipboard = (timeout = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);

    setIsCopied(true);
  };

  useEffect(() => {
    if (!isCopied) return;

    const id = setTimeout(() => setIsCopied(false), timeout);

    return () => clearTimeout(id);
  }, [isCopied, timeout]);

  return { isCopied, copyToClipboard };
};

export default useCopyToClipboard;
