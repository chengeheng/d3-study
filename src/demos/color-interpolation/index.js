import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const beforeRender = dataset => {
	d3.select("#demo")
		.append("div")
		.attr("class", styles["outer-item"])
		.selectAll("div")
		.data(dataset)
		.enter()
		.append("div")
		.attr("class", styles["item"])
		.text(d => d);
};
let data = [];

const colorScale = d3
	.scaleLinear()
	.domain([0, 21])
	.range(["white", "#4169e1"]);

const divergingScale = pivot =>
	d3
		.scaleLinear()
		.domain([0, pivot, 21])
		.range(["white", "#4169e1", "white"]);

for (var i = 0; i < 21; i++) data.push(i);

const render = (dataset, scale, id) => {
	d3.select("#demo")
		.append("div")
		.attr("class", styles["outer-item"])
		.selectAll(id)
		.data(dataset)
		.enter()
		.append("div")
		.attr("class", styles["item"])
		.style("background-color", d => {
			return scale(d);
		})
		.text((d, i) => i);
};

export default props => {
	useEffect(() => {
		beforeRender(data);
		render(data, colorScale, "#colorScale");
		render(data, divergingScale(5), "#divergingScale");
	}, []);

	return (
		<div className={styles.main} id="demo">
			<button
				onClick={() =>
					render(data, divergingScale(5), "#divergingScale")
				}
			>
				pivot at 5
			</button>
			<button
				onClick={() =>
					render(data, divergingScale(10), "#divergingScale")
				}
			>
				pivot at 10
			</button>
			<button
				onClick={() =>
					render(data, divergingScale(15), "#divergingScale")
				}
			>
				pivot at 15
			</button>
		</div>
	);
};
