import React from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import Container from './components/common/Container/Container';
import Main from './components/Main/Main';
import { Routes, BrowserRouter, Route } from 'react-router';
import About from './components/About/About';
import ContainerGrey from './components/common/ContainerGrey/ContainerGrey';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Container>
					<Header />
					<Main />
					{/* <Routes>
						<Route path='/main' element={<Main />} />
					</Routes> */}
				</Container>
				<ContainerGrey>
					<About />
				</ContainerGrey>
			</div>
		</BrowserRouter>
	);
}

export default App;
