import { useRef, useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const CircularProgressChart = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  const data = [
    { name: "DeFi", value: 34 },
    { name: "GameFi", value: 29 },
    { name: "Paytech", value: 14 },
    { name: "AI", value: 9 },
    { name: "Other", value: 2 },
  ];

  const COLORS = ["#505050", "#606060", "#707070", "#808080", "#909090"];
  const PATTERNS = [
    "diagonalHatch",
    "crossHatch",
    "diagonalHatchWide",
    "crossHatchWide",
    "verticalHatch",
  ];

  const onPieEnter = (index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const onLegendMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const onLegendMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100%", marginTop: "-4rem" }}
    >
      <ResponsiveContainer width="100%" height={window.innerWidth < 420 ? 200 : 400}>
        <PieChart>
          <defs>
            <pattern
              id="diagonalHatch"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <path
                d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                stroke="#606060"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="crossHatch"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <path
                d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                d="M1,1 l2,2 M-1,3 l4,4 M1,5 l2,2"
                stroke="#707070"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="diagonalHatchWide"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
            >
              <path
                d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                stroke="#808080"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="crossHatchWide"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
            >
              <path
                d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                stroke="#909090"
                strokeWidth="1"
              />
              <path
                d="M2,2 l4,4 M-2,6 l8,8 M2,10 l4,4"
                stroke="#909090"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="verticalHatch"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <path d="M1,0 l0,4" stroke="#A0A0A0" strokeWidth="1" />
            </pattern>
          </defs>
          <Pie
            data={data}
            cx="35%"
            cy="35%"
            transform="scale(1.25)"
            innerRadius={window.innerWidth < 420 ? 50 : 60}
            outerRadius={window.innerWidth < 420 ? 65 : 80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={isVisible}
            activeIndex={activeIndex !== null ? activeIndex : undefined}
            onMouseEnter={(_, index) => onPieEnter(index)}
            onMouseLeave={onPieLeave}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#${PATTERNS[index]})`}
                style={{
                  cursor: "pointer",
                  opacity: activeIndex === index ? 1 : 0.6,
                }}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{
              marginTop: "-1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            align="right"
            onMouseEnter={(_, index) => onLegendMouseEnter(index)}
            onMouseLeave={onLegendMouseLeave}
            payload={data.map((item, index) => ({
              id: item.name,
              type: "square",
              value: `${item.name}: ${item.value}%`,
              color: COLORS[index],
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CircularProgressChart;
