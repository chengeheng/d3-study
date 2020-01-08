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

const sizeScale = d3
	.scaleLinear()
	.domain([0, 11])
	.range([
		"italic bold 12px/30px Georgia, serif",
		"italic bold 120px/180px Geogia, serif"
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
		.style("display", "inline-block")
		.append("span")
		.style("font", (d, i) => scale(d))
		.text((d, i) => i);
};

export default props => {
	useEffect(() => {
		beforeRender(data);
		render(data, sizeScale, "#sizeScale");
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
