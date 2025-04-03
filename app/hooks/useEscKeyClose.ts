import { useCallback, useEffect } from "react";

const useEscKeyClose = (onClose: (event?: KeyboardEvent) => void | null) => {
  const escKeyClose = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose(event);
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", escKeyClose);
    return () => window.removeEventListener("keydown", escKeyClose);
  }, [escKeyClose]);
};

export default useEscKeyClose;
