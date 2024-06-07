import { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'framer-motion';

type IncrementOnViewHookReturnType = [React.RefObject<any>, number];

const useIncrementOnView = (
  initialValue: number,
  incrementValue: number,
  maxValue: number,
  speed: number
): IncrementOnViewHookReturnType => {
  const [value, setValue] = useState<number>(initialValue);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const increment = useCallback(() => {
    setValue((prevValue) => {
      if (prevValue >= maxValue) return prevValue;
      return prevValue + incrementValue;
    });
  }, [incrementValue, maxValue]);

  useEffect(() => {
    if (isInView && value < maxValue) {
      const handle = setInterval(increment, speed);
      return () => clearInterval(handle);
    }
  }, [isInView, value, maxValue, increment, speed]);

  return [ref, value];
};

export default useIncrementOnView;
