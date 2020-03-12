import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const render = () => {
	let svg = d3.select("#demo").append("svg");

	svg.attr("height", 500)
		.attr("width", 600)
		.attr("fill-opacity", 0);

	svg.append("line")
		.attr("x1", 0)
		.attr("y1", 200)
		.attr("x2", 100)
		.attr("y2", 100)
		.attr("stroke", "#000");

	svg.append("circle")
		.attr("cx", 200)
		.attr("cy", 150)
		.attr("r", 50)
		.attr("stroke", "#000");

	svg.append("rect")
		.attr("x", 300)
		.attr("y", 100)
		.attr("width", 100)
		.attr("height", 100)
		.attr("rx", 5)
		.attr("stroke", "#000");

	svg.append("polygon")
		.attr("points", "450,200 500,100 550,200")
		.attr("stroke", "#000");
};

export default props => {
	useEffect(() => {
		render();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
