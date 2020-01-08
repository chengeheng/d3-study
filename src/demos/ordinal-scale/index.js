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
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const alphabet = d3
	.scaleOrdinal()
	.domain(data)
	.range(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);

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
			return scale(d).indexOf("#") >= 0 ? scale(d) : "white";
		})
		.text(d => scale(d));
};

export default props => {
	useEffect(() => {
		beforeRender(data);
		render(data, alphabet, "#alphabet");
		render(data, d3.scaleOrdinal(d3.schemeCategory10), "#category10");
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
