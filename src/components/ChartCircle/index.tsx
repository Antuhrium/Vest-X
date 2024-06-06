import { PieChart, Pie, Cell } from "recharts";

const CircularProgressChart = () => {
  const data = [
    { name: "Completed", value: 15 },
    { name: "Remaining", value: 85 },
  ];

  return (
    <PieChart width={160} height={160}>
      <defs>
        <linearGradient id="gradient" x1="1.7" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#383838" />
        </linearGradient>
      </defs>
      <Pie
        data={data}
        innerRadius={73}
        outerRadius={76}
        startAngle={90}
        endAngle={-270}
        paddingAngle={5}
        dataKey="value"
        stroke={"none"}
      >
        <Cell key="cell-0" fill="none" />
        <Cell key="cell-1" fill="url(#gradient)" />
      </Pie>
      <Pie
        data={data}
        innerRadius={70}
        outerRadius={80}
        startAngle={90}
        endAngle={-270}
        paddingAngle={5}
        dataKey="value"
        stroke={"none"}
      >
        <Cell key="cell-0" fill="#fff" />
        <Cell key="cell-1" fill="none" />
      </Pie>
    </PieChart>
  );
};

export default CircularProgressChart;
