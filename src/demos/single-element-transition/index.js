import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

const duration = 5000;

const render = () => {
	d3.select("#demo")
		.append("div")
		.attr("class", styles["box"])
		.style("background-color", "$e9967a")
		.transition()
		.duration(duration)
		.style("background-color", "#add8e6")
		.style("margin-left", "600px")
		.style("width", "100px")
		.style("height", "100px");
};

export default props => {
	useEffect(() => {
		render();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
