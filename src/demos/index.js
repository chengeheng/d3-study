import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./index.module.less";

import ChoosedItem from "components/ChoosedItem";
import CopyRight from "components/copyRight";

import routes from "./routes";
import { parseRoute } from "parseRoute";

const Example = props => {
	const [refreshKey, setRefreshKey] = useState(0);

	const { history, location } = props;
	const { pathname } = location;
	const handleClick = path => {
		if (path === pathname) {
			setRefreshKey(v => v + 1);
		} else {
			history.push(path);
		}
	};
	return (
		<div className={styles.main}>
			<div className={styles.title}>D3学习示例</div>
			<div className={styles.body}>
				<div className={styles.buttons}>
					{routes.map(item => {
						return (
							<ChoosedItem
								key={item.path}
								type={
									pathname === item.path
										? "primary"
										: "default"
								}
								onClick={_ => handleClick(item.path)}
								className={styles.button}
							>
								{item.title}
							</ChoosedItem>
						);
					})}
				</div>
				<div className={styles.show}>
					<div className={styles.input} key={refreshKey}>
						{parseRoute(routes)}
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<CopyRight></CopyRight>
			</div>
		</div>
	);
};

export default withRouter(Example);
