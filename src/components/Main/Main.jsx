import React from 'react';
import images from '../../images/main.png';
import styles from './Main.module.scss';
import Language from './Language/Language';

function Main() {
	return (
		<main>
			<div className={styles.main__info}>
				<h1 className={styles.main__name}>Denis Novik</h1>
				<div>
					<p className={styles.main__info_text}>UX | UI designer </p>
					<p className={styles.main__info_text}>24 years old, Minsk</p>
				</div>
				<Language />
			</div>
			<div>
				<img className={styles.img__main} src={images} alt='' />
			</div>
		</main>
	);
}

export default Main;
