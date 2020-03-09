import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

let id = 0,
	data = [],
	duration = 500,
	chartHeight = 100,
	chartWidth = 680;

const push = data => {
	data.push({
		id: ++id,
		value: Math.round(Math.random() * chartHeight)
	});
};

const barLeft = i => i * (30 + 2);
const barHeight = d => d.value;

for (let i = 0; i < 20; i++) push(data);

const render = data => {
	let selection = d3
		.select("#demo")
		.selectAll(`div.${styles["v-bar"]}`)
		.data(data, d => d.id);

	// enter
	selection
		.enter()
		.append("div")
		.attr("class", styles["v-bar"])
		.style("z-index", "0")
		.style("position", "absolute")
		.style("top", chartHeight + "px")
		.style("left", (d, i) => barLeft(i + 1) + "px")
		.style("height", "0px")
		.append("span");

	// update
	selection
		.transition()
		.duration(duration)
		.style("top", d => chartHeight - barHeight(d) + "px")
		.style("left", (d, i) => barLeft(i) + "px")
		.style("height", d => barHeight(d) + "px")
		.select("span")
		.text(d => d.value);

	// exit
	selection
		.exit()
		.transition()
		.duration(duration)
		.style("left", (d, i) => barLeft(-1) + "px")
		.remove();
};

const addBaseLine = () => {
	d3.select("#demo")
		.append("div")
		.attr("class", styles["baseline"])
		.style("position", "absolute")
		.style("z-index", "1")
		.style("top", chartHeight + "px")
		.style("left", "0px")
		.style("width", chartWidth + "px");
};
export default props => {
	useEffect(() => {
		addBaseLine();
		let timer = setInterval(() => {
			data.shift();
			push(data);
			render(data);
		}, 2000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
