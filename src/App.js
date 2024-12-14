import React from 'react';
import './App.module.scss';
import Header from './components/Header/Header'
import Container from './components/common/Container/Container';
import Main from './components/Main/Main';
import { Routes, BrowserRouter, Route } from 'react-router';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Container>
					<Header />
					<Routes>
						<Route path='/main' element={<Main />} />
					</Routes>
				</Container>
			</div>
		</BrowserRouter>
	);
}

export default App;
