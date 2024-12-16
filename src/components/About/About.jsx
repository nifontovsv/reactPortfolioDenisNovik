import React from 'react';
import Description from '../common/Description/Description';
import Heading from '../common/Heading/Heading';
import styles from './About.module.scss';

function About() {
	return (
		<section className={styles.about}>
			<Heading className={styles.heading} heading='About me' />
			<div>
				<Description description='Hi, I&rsquo;m Denis&nbsp;&mdash; UX/UI designer from Minsk.' />
				<Description description='I&rsquo;m interested in&nbsp;design and everything connected with&nbsp;it.' />
				<Description description=' I&rsquo;m studying at&nbsp;courses &laquo;Web and mobile design ' />
				<Description description='interfaces&raquo; in&nbsp;IT-Academy.' />
				<Description description=' Ready to&nbsp;implement excellent projects' />
				<Description description='with wonderful people.' />
			</div>
		</section>
	);
}

export default About;
