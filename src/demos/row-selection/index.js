import React, { useEffect } from "react";
import styles from "./index.module.less";

import * as d3 from "d3";

export default props => {
	const title = ["Time", "Type", "Amount"];
	const dataset = [
		{
			time: "10:22",
			type: "Purchase",
			amount: "10.00"
		},
		{
			time: "12:12",
			type: "Purchase",
			amount: "12.50"
		},
		{
			time: "14:11",
			type: "Expense",
			amount: "9.70"
		}
	];
	useEffect(() => {
		const table = d3
			.select("#demo")
			.append("table")
			.attr("class", styles.main);

		table
			.append("thead")
			.append("tr")
			.selectAll("th")
			.data(title)
			.enter()
			.append("th")
			.text(d => d);
		table
			.append("tbody")
			.selectAll("tr")
			.data(dataset)
			.enter()
			.append("tr")
			.each(function(d, i) {
				const tr = d3.select(this);
				tr.append("td").text(d => d[title[0].toLowerCase()]);
				tr.append("td").text(d => d[title[1].toLowerCase()]);
				tr.append("td").text(d => d[title[2].toLowerCase()]);
			});

		// 处理原始选集
		const trSelection = d3.selectAll("tr");
		const headerElement = trSelection.nodes()[0];
		console.log(headerElement);

		d3.select(headerElement).attr("class", styles["table-row-header"]);

		const rows = trSelection.nodes().slice(1, 4);
		console.log(rows);
		rows.forEach((item, index) => {
			d3.select(item).attr("class", (d, i) => {
				console.log(d);
				return index % 2 === 1
					? styles["table-row-odd"]
					: styles["table-row-even"];
			});
		});
	}, []);

	return <div className={styles.main} id="demo"></div>;
};
