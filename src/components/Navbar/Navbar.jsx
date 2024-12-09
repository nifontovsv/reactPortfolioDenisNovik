import React from 'react';
import styles from './Navbar.module.scss';
import NavbarItem from '../NavbarItem/NavbarItem';

const listMenu = [
	{
		title: 'Home',
		href: '#',
		id: 1,
	},
	{
		title: 'About me',
		href: '#',
		id: 2,
	},
	{
		title: 'Skills',
		href: '#',
		id: 3,
	},
	{
		title: 'Portfolio',
		href: '#',
		id: 4,
	},
	{
		title: 'Contacts',
		href: '#',
		id: 5,
	},
];

function Navbar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				{listMenu.map(item => (
					<NavbarItem menuItem={item} />
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
