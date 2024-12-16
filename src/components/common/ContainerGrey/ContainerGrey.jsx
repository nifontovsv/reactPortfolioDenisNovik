import React from 'react';
import styles from './ContainerGrey.module.scss';

function ContainerGrey(props) {
	return <div className={styles.container}>{props.children}</div>;
}

export default ContainerGrey;
