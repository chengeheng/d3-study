import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

export default props => {
	const duration = 3000;

	const render = () => {
		d3.select("#demo")
			.append("div")
			.attr("class", styles["box"])
			.style("background-color", "steelblue")
			.style("color", "white")
			.text("waiting")
			.transition()
			.duration(duration)
			.delay(1000)
			.on("start", function() {
				d3.select(this).text(() => "transitioning");
			})
			.on("end", function() {
				d3.select(this).text(() => "done");
			})
			.style("margin-left", "400px");
	};

	useEffect(() => {
		render();
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
