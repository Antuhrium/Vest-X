import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  Tooltip,
  CartesianGrid,
  AreaChart,
  TooltipProps,
} from "recharts";
import styles from "./styles.module.scss"; // Adjust the path as necessary

interface DataPoint {
  name: string;
  uv: number;
}

const allData: Record<string, DataPoint[]> = {
  "7D": [
    { name: "May 1", uv: 100 },
    { name: "May 2", uv: 500 },
    { name: "May 3", uv: 1000 },
    { name: "May 4", uv: 1500 },
    { name: "May 5", uv: 2000 },
    { name: "May 6", uv: 2500 },
    { name: "May 7", uv: 3000 },
  ],
  "30D": [
    { name: "Week 1", uv: 100 },
    { name: "Week 2", uv: 5004.12 },
    { name: "Week 3", uv: 504.12 },
    { name: "Week 4", uv: 15504.58 },
  ],
  "180D": [
    { name: "Month 1", uv: 504.12 },
    { name: "Month 2", uv: 1000 },
    { name: "Month 3", uv: 5000 },
    { name: "Month 4", uv: 10000 },
    { name: "Month 5", uv: 15000 },
    { name: "Month 6", uv: 20000 },
  ],
  "360D": [
    { name: "Quarter 1", uv: 504.12 },
    { name: "Quarter 2", uv: 5004.12 },
    { name: "Quarter 3", uv: 504.12 },
    { name: "Quarter 4", uv: 15504.58 },
  ],
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.label}>{`Date: ${label}`}</p>
        <p className={styles.value}>{`Value: $${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const ChartLine: React.FC = () => {
  const [selectedRange, setSelectedRange] =
    useState<keyof typeof allData>("30D");
  const [data, setData] = useState<DataPoint[]>(allData[selectedRange]);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  useEffect(() => {
    setData(allData[selectedRange]);
  }, [selectedRange]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className={styles.chartContainer} ref={ref}>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0.05" x2="0" y2="2">
              <stop offset="0%" stopColor="#001D6C" stopOpacity={1} />
              <stop offset="60%" stopColor="#030711" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 12, fill: "#ffffff" }}
          />
          <YAxis
            domain={["auto", "auto"]}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#ffffff" }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid
            strokeDasharray="3 3"
            strokeOpacity={0.1}
            vertical={false}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="white"
            strokeWidth={2}
            fill="url(#colorUv)"
            fillOpacity={1}
            isAnimationActive={isVisible}
            dot={{ r: 5, fill: "white", stroke: "white", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className={styles.buttonContainer}>
        {(["7D", "30D", "180D", "360D"] as const).map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`${styles.button} ${
              selectedRange === range ? styles.active : ""
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartLine;
