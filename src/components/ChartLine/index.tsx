import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
	{ name: "May 1", uv: 75, pv: 75, y: 100 },
	{ name: "May 7", uv: 75, pv: 75, dot: 75, y: 0 },
	{ name: "May 13", uw: 10, uv: 10, pv: null, y: 75 },
	{ name: "May 19", uw: 50, pv: null, y: 0 },
	{ name: "May 25", uw: 80, pv: null, y: 0 },
	{ name: "May 31" },
];

const ChartLine = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		if (isInView) {
			setIsVisible(true);
		}
	}, [isInView]);
	return (
		<ResponsiveContainer width={"100%"} height={"100%"} ref={ref}>
			<AreaChart data={data}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
						<stop offset="0%" stopColor="#030711" stopOpacity={0} />
						<stop offset="100%" stopColor="#ffffff20" stopOpacity={1} />
					</linearGradient>
				</defs>
				<XAxis dataKey="name" tickLine={false} tick={{ fontSize: 12 }} />
				<YAxis
					domain={[0, 100]}
					ticks={[0, 10, 20, 30, 40, 50, 60, 70, 75, 80, 90, 100]}
					tickCount={11}
					tick={{ fontSize: 12 }}
					tickFormatter={(value) =>
						value === 0 || value === 75 || value === 100 ? `${value}%` : ""
					}
				/>
				<Area
					type="stepBefore"
					dataKey="uv"
					stroke="#FFFFFF40"
					fill="none"
					isAnimationActive={isVisible ? true : false}
				/>
				<Area
					isAnimationActive={isVisible ? true : false}
					type="stepBefore"
					dataKey="pv"
					stroke="white"
					strokeWidth={3}
					fill="url(#colorUv)"
					fillOpacity={1}
					connectNulls={true}
					name="White Segment"
				/>
				<Area
					isAnimationActive={isVisible ? true : false}
					dataKey="dot"
					dot={{ fill: "#ffffff", stroke: "#fff", strokeWidth: 5 }}
				/>
				<Area
					type="basis"
					dataKey="uw"
					stroke="#FFFFFF40"
					fill="none"
					isAnimationActive={isVisible ? true : false}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default ChartLine;
