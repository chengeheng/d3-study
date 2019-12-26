import React, { useState, useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";
const colorScale = d3
	.scaleLinear()
	.domain([0, 100])
	.range(["#add8e6", "blue"]);
const render = dataset => {
	const bars = d3
		.select("#demo")
		.selectAll("div")
		.data(dataset);

	bars.enter()
		.append("div")
		.attr("class", styles["bar-item"])
		.merge(bars)
		.style("width", d => d.width * 5 + "px")
		.style("background-color", d => colorScale(d.color))
		.text(d => d.width);

	bars.exit().remove();
};

export default props => {
	const [data, setData] = useState([
		{ width: 10, color: 21 },
		{ width: 15, color: 33 },
		{ width: 30, color: 40 },
		{ width: 50, color: 60 },
		{ width: 80, color: 22 },
		{ width: 65, color: 10 },
		{ width: 55, color: 5 },
		{ width: 30, color: 30 },
		{ width: 20, color: 60 },
		{ width: 10, color: 90 },
		{ width: 8, color: 10 }
	]);

	const randomValue = () => Math.round(Math.random() * 100);

	useEffect(() => {
		render(data);
	}, [data]);

	useEffect(() => {
		const timer = setInterval(() => {
			let newData = [...data];
			newData.shift();
			newData.push({
				width: randomValue(),
				color: randomValue()
			});
			setData(newData);
		}, 1000);
		return () => clearInterval(timer);
	}, [data]);
	return (
		<div className={styles.main} id="demo">
			<button
				onClick={() => {
					let newData = [...data];
					newData.shift();
					newData.push({
						width: randomValue(),
						color: randomValue()
					});
					setData(newData);
				}}
			>
				change
			</button>
		</div>
	);
};
