import { useScroll } from "framer-motion";
import { ComponentRef, useCallback, useEffect, useRef, useState } from "react";

export function useProjectModel() {
  const [axleX, setAxleX] = useState(0);

  const ref = useRef<ComponentRef<"div">>(null);
  const { scrollY } = useScroll();

  const handleUpdateX = useCallback((e: number) => {
    setAxleX(e - 1300);
  }, []);

  useEffect(() => {
    scrollY.on("change", handleUpdateX);

    () => scrollY.destroy();
  }, [handleUpdateX, scrollY]);

  return {
    axleX,
    ref,
  };
}
