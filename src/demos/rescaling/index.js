import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const height = 500,
	width = 500,
	margin = 25;
let xAxis, yAxis, xAxisLength, yAxisLength;

const addSvg = () => {
	d3.select("#demo")
		.append("svg")
		.attr("class", styles["axis"])
		.attr("width", width)
		.attr("height", height);
};

const renderXAxis = () => {
	let svg = d3.select("svg");
	xAxisLength = width - 2 * margin;
	const scale = d3
		.scaleLinear()
		.domain([0, 100])
		.range([0, xAxisLength]);
	xAxis = d3.axisBottom().scale(scale);
	svg.append("g")
		.attr("class", styles["x-axis"])
		.attr("transform", () => `translate(${margin}, ${height - margin})`)
		.call(xAxis);
};
const renderYAxis = () => {
	let svg = d3.select("svg");
	yAxisLength = height - 2 * margin;
	const scale = d3
		.scaleLinear()
		.domain([100, 0])
		.range([0, yAxisLength]);
	yAxis = d3.axisLeft().scale(scale);
	svg.append("g")
		.attr("class", styles["y-axis"])
		.attr("transform", () => `translate(${margin}, ${margin})`)
		.call(yAxis);
};

const renderXGridlines = () => {
	d3.selectAll(`g.${styles["x-axis"]} g.tick`)
		.select(`line.${styles["gird-line"]}`)
		.remove();

	d3.selectAll(`g.${styles["x-axis"]} g.tick`)
		.append("line")
		.classed(styles["grid-line"], true)
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", -yAxisLength);
};
const renderYGridlines = () => {
	d3.selectAll(`g.${styles["y-axis"]} g.tick`)
		.select(`line.${styles["gird-line"]}`)
		.remove();

	d3.selectAll(`g.${styles["y-axis"]} g.tick`)
		.append("line")
		.classed(styles["grid-line"], true)
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", xAxisLength)
		.attr("y2", 0);
};

const rescale = () => {
	let svg = d3.select("svg");
	let max = Math.round(Math.random() * 100);
	xAxis.scale().domain([0, max]);
	svg.select(`g.${styles["x-axis"]}`)
		.transition()
		.call(xAxis);
	yAxis.scale().domain([max, 0]);
	svg.select(`g.${styles["y-axis"]}`)
		.transition()
		.call(yAxis);
	renderXGridlines();
	renderYGridlines();
};
export default props => {
	useEffect(() => {
		addSvg();
		renderXAxis();
		renderYAxis();
	}, []);

	return (
		<div className={styles.main} id="demo">
			<button onClick={() => rescale()}>rescale</button>
		</div>
	);
};
