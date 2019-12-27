import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

let data = [];
const datum = x => 15 + x * x;
const newData = () => {
	data.push(datum);
	return data;
};

const render = () => {
	const divs = d3
		.select("#demo")
		.selectAll("div")
		.data(newData);

	divs.enter()
		.append("div")
		.append("span");

	divs.attr("class", styles["v-bar"])
		.style("height", (d, i) => d(i) + "px")
		.select("span")
		.text((d, i) => d(i));

	divs.exit().remove();
};

export default _ => {
	useEffect(() => {
		const timer = setInterval(() => render(), 1000);
		setTimeout(() => {
			clearInterval(timer);
		}, 20000);
		return () => clearInterval(timer);
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
