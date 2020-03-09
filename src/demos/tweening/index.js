import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const duration = 5000;

const widthTween = a => {
	let interpolate = d3
		.scaleQuantize()
		.domain([0, 1])
		.range([150, 200, 250, 350, 400]);
	return t => interpolate(t) + "px";
};

const valueTween = () => {
	let interpolate = d3
		.scaleQuantize()
		.domain([0, 1])
		.range([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	return t => interpolate(t);
};

const render = () => {
	d3.select("#demo")
		.append("div")
		.append("input")
		.attr("type", "button")
		.attr("class", styles["countdown"])
		.attr("value", "0")
		.style("width", "150px")
		.transition()
		.duration(duration)
		.ease(d3.easeLinear)
		.style("width", "400px")
		.attr("value", "9");

	d3.select("#demo")
		.append("div")
		.append("input")
		.attr("type", "button")
		.attr("class", styles["countdown"])
		.attr("value", "0")
		.transition()
		.duration(duration)
		.ease(d3.easeLinear)
		.styleTween("width", widthTween)
		.attrTween("value", valueTween);
};

export default props => {
	useEffect(() => {
		render();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
