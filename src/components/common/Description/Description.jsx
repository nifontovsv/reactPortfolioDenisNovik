import React from 'react';
import styles from './Description.module.scss';

function Description(props) {
	return (
		<div>
			<p className={styles.description}>{props.description}</p>
		</div>
	);
}

export default Description;
