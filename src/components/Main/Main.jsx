import React from 'react';
import images from '../../images/main.png';
import styles from './Main.module.scss';
import Language from './Language/Language';
import Description from '../common/Description/Description';

function Main() {
	return (
		<main>
			<div className={styles.main__info}>
				<h1 className={styles.main__name}>Denis Novik</h1>
				<div>
					<Description description='UX | UI designer' />
					<Description description='24 years old, Minsk' />
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
