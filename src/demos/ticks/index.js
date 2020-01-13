import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const height = 500,
	width = 500,
	margin = 25,
	axisWidth = width - 2 * margin;

const render = () => {
	let svg = d3
		.select("#demo")
		.append("svg")
		.attr("class", styles["axis"])
		.attr("width", width)
		.attr("height", height);

	const scale = d3
		.scaleLinear()
		.domain([0, 1])
		.range([0, axisWidth]);

	const axis = d3
		.axisBottom()
		.scale(scale)
		.ticks(5) // 默认为10个
		.tickSize(10)
		.tickPadding(10)
		.tickFormat(d3.format(".0%")); // tickFormat的参数也可以是一个函数，定制返回的格式

	svg.append("g")
		.attr("transform", () => {
			return `translate(${margin}, margin)`;
		})
		.call(axis);
};

export default props => {
	useEffect(() => {
		render();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
