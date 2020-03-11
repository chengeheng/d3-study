import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const teleport = s => {
	s.transition()
		.duration(1000)
		.style("width", "200px")
		.style("height", "1px")
		.transition()
		.duration(1000)
		.style("left", "600px")
		.transition()
		.duration(1000)
		.style("left", "800px")
		.style("height", "80px")
		.style("width", "80px");
};

export default props => {
	const render = () => {
		d3.select("#demo")
			.append("div")
			.style("position", "relative")
			.style("background-color", "steelblue")
			.style("left", "10px")
			.style("width", "80px")
			.style("height", "80px")
			.call(teleport);
	};

	useEffect(() => {
		render();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
