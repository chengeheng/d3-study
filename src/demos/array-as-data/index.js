import React, { useState, useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

export default props => {
	const [data, setData] = useState([
		10,
		15,
		30,
		50,
		80,
		65,
		55,
		30,
		20,
		10,
		8
	]);
	const render = dataset => {
		const bars = d3
			.select("#demo")
			.selectAll("div")
			.data(dataset);
		bars.enter()
			.append("div")
			.merge(bars)
			.style("width", d => d * 3 + "px")
			.attr("class", styles["bar-item"])
			.text(d => d);

		bars.exit().remove();
	};
	useEffect(() => {
		render(data);
	}, [data]);

	return (
		<div className={styles.main} id="demo">
			<button
				onClick={() => {
					let newData = [...data];
					newData.shift();
					newData.push(Math.round(Math.random() * 100));
					setData(newData);
				}}
			>
				change
			</button>
		</div>
	);
};
