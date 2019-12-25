import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";

const ChoosedItem = props => {
	const { type, onClick, className, children } = props;

	return (
		<div
			className={`${styles.outer} ${className}`}
			onClick={() => onClick({ value: children })}
		>
			<div className={`${styles.main} ${styles[type]}`}>{children}</div>
		</div>
	);
};

ChoosedItem.propTypes = {
	type: PropTypes.string,
	onClick: PropTypes.func
};

ChoosedItem.defaultProps = {
	type: "default",
	onClick: _ => {},
	className: null
};

export default ChoosedItem;
