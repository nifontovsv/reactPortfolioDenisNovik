import React from 'react';
import styles from './NavbarItem.module.scss';

function NavbarItem(props) {
	return (
		<li className={styles.nav__list_item}>
			<a className={styles.nav__list_link} href={props.menuItem.href}>
				{props.menuItem.title}
			</a>
		</li>
	);
}

export default NavbarItem;
