import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const render = (dataset, category) => {
	const bars = d3
		.select("#demo")
		.selectAll("div")
		.data(dataset);

	bars.enter()
		.append("div")
		.attr("class", styles["h-bar"])
		.style("width", d => d.expense * 5 + "px")
		.append("span")
		.text(d => d.category);

	d3.selectAll("div.h-bar").attr("class", styles["h-bar"]);

	bars.filter((d, i) => {
		return d.category === category;
	}).classed(styles["selected"], true);

	bars.filter((d, i) => {
		return d.category !== category;
	}).classed(styles["selected"], false);
};

export default props => {
	const data = [
		{ expense: 10, category: "Retail" },
		{ expense: 15, category: "Gas" },
		{ expense: 30, category: "Retail" },
		{ expense: 50, category: "Dining" },
		{ expense: 80, category: "Gas" },
		{ expense: 65, category: "Retail" },
		{ expense: 55, category: "Gas" },
		{ expense: 30, category: "Dining" },
		{ expense: 20, category: "Retail" },
		{ expense: 10, category: "Dining" },
		{ expense: 8, category: "Gas" }
	];

	useEffect(() => {
		render(data);
	}, [data]);

	const selected = category => {
		render(data, category);
	};

	return (
		<div className={styles.main} id="demo">
			<button onClick={e => selected("Retail")}>Retail</button>
			<button onClick={e => selected("Gas")}>Gas</button>
			<button onClick={e => selected("Dining")}>Dining</button>
			<button onClick={e => selected()}>Clear</button>
		</div>
	);
};
