import React, { useEffect, useRef, useState } from "react";
import { CountUp, CountUpOptions } from "countup.js";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
}

const CountUpComponent: React.FC<CountUpProps> = ({ end }) => {
  const countUpRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countUpRef, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (countUpRef.current && isVisible) {
      const options: CountUpOptions = {
        startVal: 0,
        decimalPlaces: end % 1 === 0 ? 0 : 2,
        duration: 2,
        useEasing: true,
        separator: "",
        formattingFn: (value) => {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
      };

      const countUp = new CountUp(countUpRef.current, end, options);

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    }
  }, [end, isVisible]);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return <span ref={countUpRef} />;
};

export default CountUpComponent;
