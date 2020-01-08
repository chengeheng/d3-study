import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

let data = [];
for (let i = 0; i < 21; i++) data.push(i);
const compoundScale = d3
	.scalePow()
	.exponent(2)
	.domain([0, 21])
	.range([
		{
			color: "#add8e6",
			height: "15px"
		},
		{
			color: "#4169e1",
			height: "150px"
		}
	]);

const render = (dataset, scale, id) => {
	d3.select("#demo")
		.append("div")
		.attr("class", styles["outer-item"])
		.selectAll(id)
		.data(dataset)
		.enter()
		.append("div")
		.attr("class", styles["item"])
		.style("height", d => {
			return scale(d).height;
		})
		.style("background-color", d => {
			return scale(d).color;
		})
		.text((d, i) => i);
};

export default props => {
	useEffect(() => {
		render(data, compoundScale, "#compoundScale");
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
