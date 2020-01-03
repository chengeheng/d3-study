import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const render = (dataset, comparator) => {
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

	if (comparator) bars.sort(comparator);
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
	const sort = comparator => {
		render(data, comparator);
	};
	useEffect(() => {
		render(data);
	}, [data]);
	return (
		<div className={styles.main} id="demo">
			<button
				onClick={() => sort((a, b) => (a.expense < b.expense ? -1 : 1))}
			>
				Sort by width
			</button>
			<button
				onClick={() =>
					sort((a, b) => (a.category < b.category ? -1 : 1))
				}
			>
				Sort by Category
			</button>
			<button onClick={() => sort()}>Clear</button>
		</div>
	);
};
