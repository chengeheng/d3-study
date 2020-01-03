import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const start = new Date(2016, 0, 1),
	end = new Date(2016, 11, 31),
	range = [0, 1200],
	time = d3
		.scaleTime()
		.domain([start, end])
		.rangeRound(range),
	max = 12,
	data = [];
for (let i = 0; i < max; i++) {
	let date = new Date(start.getTime());
	date.setMonth(start.getMonth() + i);
	data.push(date);
}

export default props => {
	const render = (dataset, scale) => {
		d3.select("#demo")
			.selectAll("div")
			.data(dataset)
			.enter()
			.append("div")
			.attr("class", styles["item"])
			.html(d => {
				let format = d3.timeFormat("%x");
				return format(d) + "<br>" + scale(d) + "px";
			});
	};
	useEffect(() => {
		render(data, time);
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
