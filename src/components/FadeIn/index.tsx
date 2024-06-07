import { useRef } from "react";
import { useInView } from "framer-motion";

interface FadeInTypes {
  children: React.ReactNode;
  fled?: "x" | "y";
  delay?: number;
}

const FadeIn: React.FC<FadeInTypes> = ({ children, fled, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const transitionDelay = `${delay}s`;

  const fledDirection =
    fled === "x" ? "opacity-0 -translate-x-1/2" : "opacity-0 translate-y-1/2";

  return (
    <div
      ref={ref}
      className={`w-full h-fit ${
        isInView
          ? "opacity-100 translate-x-0 transition-all duration-1000"
          : fledDirection
      }`}
      style={{ transitionDelay: isInView ? transitionDelay : "0s" }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
