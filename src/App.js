import React from 'react';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import GlobalStyles from './styles/Global';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Nav />
			<Main />
			<Footer />
		</>
	);
};

export default App;
