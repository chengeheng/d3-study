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

const render = (dataset, scale, id) => {
	d3.select("#demo")
		.append("div")
		.attr("class", styles["outer-item"])
		.selectAll(id)
		.data(dataset)
		.enter()
		.append("div")
		.attr("class", styles["item"])
		.text(d => d3.format(".2")(scale(d), 2));
};

const linear = d3
	.scaleLinear()
	.domain([1, 10])
	.range([1, 10]);

const pow = d3.scalePow().exponent(2);

const powCapped = d3
	.scalePow()
	.exponent(2)
	.domain([1, 10])
	.rangeRound([1, 10]);

const log = d3.scaleLog();

const logCapped = d3
	.scaleLog()
	.domain([1, 10])
	.rangeRound([1, 10]);

export default props => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	useEffect(() => {
		beforeRender(data);
		render(data, linear, "#demo-linear");
		render(data, pow, "#demo-pow");
		render(data, powCapped, "#demo-pow-capped");
		render(data, log, "#demo-log");
		render(data, logCapped, "#demo-log-capped");
	}, [data]);

	return <div className={styles.main} id="demo"></div>;
};
