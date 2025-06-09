import { useEffect, useRef } from "react";

export function useBuildTimer(isRunning: boolean, onTick: () => void, interval: number) {
  const savedCallback = useRef(onTick);

  useEffect(() => {
    savedCallback.current = onTick;
  }, [onTick]);

  useEffect(() => {
    if (!isRunning) return;
    const tick = () => savedCallback.current();
    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [isRunning, interval]);
}
