import React from 'react';
import styles from './Heading.module.scss';

function Heading(props) {
	return (
		<>
			<h1 className={styles.heading}>{props.heading}</h1>
		</>
	);
}

export default Heading;
