import React from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Main from './components/Main/Main';

function App() {
	return (
		<div className='App'>
			<Container>
				<Header />
				<Main />
			</Container>
		</div>
	);
}

export default App;
