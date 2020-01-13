import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const height = 500,
	width = 500,
	margin = 25;

const addSvg = () => {
	d3.select("#demo")
		.append("svg")
		.attr("class", styles["axis"])
		.attr("width", width)
		.attr("height", height);
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
		addSvg();
		renderXAxis();
		renderYAxis();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
