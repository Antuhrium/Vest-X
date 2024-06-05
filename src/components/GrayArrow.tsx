type GrayArrowType = {
  color?: string;
  opacity?: number;
};

const GrayArrow: React.FC<GrayArrowType> = ({ color, opacity }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={opacity ? opacity : "0.5"}
        d="M17 3.14925V17M17 17H3.14925M17 17L1 1"
        stroke={color ? color : "white"}
      />
    </svg>
  );
};

export default GrayArrow;
