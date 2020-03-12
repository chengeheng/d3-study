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

	let line = d3
		.line()
		.x(d => x(d.x))
		.y(d => y(d.y));

	svg.attr("width", width)
		.attr("height", height)
		.attr("stroke", "#000")
		.attr("fill-opacity", 0);

	svg.selectAll("path.line")
		.data(data)
		.enter()
		.append("path")
		.attr("class", styles["line"])
		.attr("d", d => line(d));
	renderXAxis();
	renderYAxis();
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
export default props => {
	useEffect(() => {
		render();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
