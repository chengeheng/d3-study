import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

export default props => {
	useEffect(() => {
		d3.select("#demo")
			.selectAll("div")
			.data([1, 2, 3])
			.enter()
			.append("div")
			.attr("class", styles["red-box"])
			.text((d, i) => i)
			.style("color", "#fff");
	}, []);
	return <div className={styles.main} id="demo"></div>;
};
