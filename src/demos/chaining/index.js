import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

export default props => {
	useEffect(() => {
		d3.select("#demo").text("Hello World!");
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
