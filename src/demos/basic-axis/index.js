import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const height = 500,
	width = 500,
	margin = 25,
	offset = 50,
	axisWidth = width - 2 * margin;
let svg;
const createSvg = () => {
	svg = d3
		.select("#demo")
		.append("svg")
		.attr("class", "axis")
		.attr("width", width)
		.attr("height", height);
};

const renderAxis = (fn, scale, i) => {
	let axis = fn()
		.scale(scale)
		.ticks(5);
	svg.append("g")
		.attr("transform", () => {
			if ([d3.axisTop, d3.axisBottom].indexOf(fn) >= 0) {
				// translate 平移，第一个参数为水平偏移量，第二个参数为竖直偏移量
				return `translate(${margin}, ${i * offset})`;
			} else {
				return `translate(${i * offset}, ${margin})`;
			}
		})
		.call(axis);
};

const renderAll = fn => {
	if (svg) svg.remove();
	createSvg();
	renderAxis(
		fn,
		d3
			.scaleLinear()
			.domain([0, 100])
			.range([0, axisWidth]),
		1
	);
	renderAxis(
		fn,
		d3
			.scalePow()
			.exponent(2)
			.domain([0, 100])
			.range([0, axisWidth]),
		2
	);
	renderAxis(
		fn,
		d3
			.scaleTime()
			.domain([new Date(2016, 0, 1), new Date(2017, 0, 1)])
			.range([0, axisWidth]),
		3
	);
};

export default props => {
	useEffect(() => {
		renderAll(d3.axisBottom);
	}, []);

	return (
		<div className={styles.main} id="demo">
			<button
				onClick={() => {
					renderAll(d3.axisBottom);
				}}
			>
				horizontal bottom
			</button>
			<button
				onClick={() => {
					renderAll(d3.axisTop);
				}}
			>
				horizontal top
			</button>
			<button
				onClick={() => {
					renderAll(d3.axisLeft);
				}}
			>
				vertical left
			</button>
			<button
				onClick={() => {
					renderAll(d3.axisRight);
				}}
			>
				vertical right
			</button>
		</div>
	);
};
