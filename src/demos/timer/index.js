import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

let countdown;
const countUp = e => {
	let t = d3.timer(() => {
		let value = countdown.attr("value");
		if (value === e.toString()) {
			t.stop();
			return true;
		}
		countdown.attr("value", ++value);
	});
};

const render = () => {
	countdown = d3
		.select("#demo")
		.append("div")
		.style("height", "120px")
		.append("input");

	countdown
		.attr("type", "button")
		.attr("class", styles["countdown"])
		.attr("value", 0);
};
const reset = () => {
	countdown.attr("value", 0);
};

export default props => {
	useEffect(() => {
		render();
	}, []);

	return (
		<div className={styles.main} id="demo">
			<button onClick={() => countUp(100)}>Start</button>
			<button onClick={() => reset()}>Clear</button>
		</div>
	);
};
