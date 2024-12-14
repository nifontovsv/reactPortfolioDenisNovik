import React from 'react';
import styles from './Language.module.scss';

function Language() {
	return (
		<div className={styles.lang}>
			<a className={styles.main__info_link} href='/'>
				RU
			</a>
			<span>&nbsp;|&nbsp;</span>
			<a className={styles.main__info_link} href='/'>
				ENG
			</a>
		</div>
	);
}

export default Language;
