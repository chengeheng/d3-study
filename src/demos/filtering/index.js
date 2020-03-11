import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

export default props => {
	const data = ["Cat", "Dog", "Cat", "Dog", "Cat", "Dog", "Cat", "Dog"];
	const duration = 1000;

	const render = data => {
		d3.select("#demo")
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.attr("class", styles["fixed-cell"])
			.style("top", (d, i) => {
				return i * 40 + "px";
			})
			.style("background-color", "steelblue")
			.style("color", "white")
			.style("left", "500px")
			.text(d => d)
			.transition()
			.duration(duration)
			.style("left", "10px")
			.filter(d => d === "Cat")
			.transition()
			.duration(duration)
			.style("left", "300px");
	};

	useEffect(() => {
		render(data);
	}, [data]);

	return <div className={styles.main} id="demo"></div>;
};
