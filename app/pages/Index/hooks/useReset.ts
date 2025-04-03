import { useEffect } from "react";

const useReset = ({ key, reset }: { key?: string; reset: () => void }) => {
  useEffect(() => {
    return () => {
      reset();
    };
  }, [key, reset]);
};

export default useReset;
