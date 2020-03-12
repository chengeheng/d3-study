import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

let width = 500,
	height = 500,
	margin = 50,
	x = d3
		.scaleLinear()
		.domain([0, 10])
		.range([margin, width - margin]),
	y = d3
		.scaleLinear()
		.domain([0, 10])
		.range([height - margin, margin]);

let data = [
	[
		{ x: 0, y: 5 },
		{ x: 1, y: 9 },
		{ x: 2, y: 7 },
		{ x: 3, y: 5 },
		{ x: 4, y: 3 },
		{ x: 6, y: 4 },
		{ x: 7, y: 2 },
		{ x: 8, y: 3 },
		{ x: 9, y: 2 }
	],
	d3.range(10).map(i => ({ x: i, y: Math.sin(i) + 5 }))
];

const render = () => {
	let svg = d3.select("#demo").append("svg");

	svg.attr("width", width)
		.attr("height", height)
		.attr("stroke", "#000")
		.attr("fill-opacity", 0);

	renderXAxis();
	renderYAxis();

	renderCurve(d3.curveLinear);

	renderDots(svg);
};

const renderCurve = mode => {
	let svg = d3.select("svg");
	let line = d3
		.line()
		.x(d => x(d.x))
		.y(d => y(d.y))
		.curve(mode); // 使用插值模式

	svg.selectAll("path.line")
		.data(data)
		.enter()
		.append("path")
		.attr("class", "line");

	svg.selectAll("path.line")
		.data(data)
		.attr("d", d => line(d));
};

const renderDots = svg => {
	data.forEach(list => {
		svg.append("g")
			.selectAll("circle")
			.data(list)
			.enter()
			.append("circle")
			.attr("class", styles["dot"])
			.attr("cx", d => x(d.x))
			.attr("cy", d => y(d.y))
			.attr("r", 4.5)
			.attr("stroke", "#008cff")
			.attr("fill", "#008cff")
			.attr("fill-opacity", 1);
	});
};

const renderXAxis = () => {
	let svg = d3.select("svg");
	const axisLength = width - 2 * margin;
	const scale = d3
		.scaleLinear()
		.domain([0, 100])
		.range([0, axisLength]);

	const xAxis = d3.axisBottom().scale(scale);
	svg.append("g")
		.attr("class", styles["x-axis"])
		.attr("transform", () => `translate(${margin},${height - margin})`)
		.call(xAxis);
	d3.selectAll(`g.${styles["x-axis"]} g.tick`)
		.append("line")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", -(height - 2 * margin))
		.attr("class", `${styles["grid-line"]}`);
};
const renderYAxis = () => {
	let svg = d3.select("svg");
	const axisLength = height - 2 * margin;
	const scale = d3
		.scaleLinear()
		.domain([100, 0])
		.range([0, axisLength]);

	const yAxis = d3.axisLeft().scale(scale);
	svg.append("g")
		.attr("class", "y-axis")
		.attr("transform", () => `translate(${margin},${margin})`)
		.call(yAxis);
	d3.selectAll(`g.y-axis g.tick`)
		.append("line")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", height - 2 * margin)
		.attr("y2", 0)
		.attr("class", `${styles["grid-line"]}`);
};
export default _ => {
	useEffect(() => {
		render();
	}, []);

	return (
		<div className={styles.main} id="demo">
			<button onClick={() => renderCurve(d3.curveLinear)}>
				curveLinear
			</button>
			<button onClick={() => renderCurve(d3.curveLinearClosed)}>
				curveLinearClosed
			</button>
			<button onClick={() => renderCurve(d3.curveStepBefore)}>
				curveStepBefore
			</button>
			<button onClick={() => renderCurve(d3.curveStepAfter)}>
				curveStepAfter
			</button>
			<button onClick={() => renderCurve(d3.curveBasis)}>
				curveBasis
			</button>
			<button onClick={() => renderCurve(d3.curveBasisOpen)}>
				curveBasisOpen
			</button>
			<button onClick={() => renderCurve(d3.curveBasisClosed)}>
				curveBasisClosed
			</button>
		</div>
	);
};
