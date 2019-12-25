import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./index.module.less";

import ChoosedItem from "components/ChoosedItem";

import routes from "./routes";
import { parseRoute } from "parseRoute";

const Example = props => {
	const { history, location } = props;
	const { pathname } = location;
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
								onClick={_ => history.push(item.path)}
								className={styles.button}
							>
								{item.title}
							</ChoosedItem>
						);
					})}
				</div>
				<div className={styles.show}>
					<div className={styles.input}>{parseRoute(routes)}</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Example);
