import React from 'react'
import AppStack from './src/navigation'
import {Provider} from 'react-redux'
import store from './src/redux/store'

const App = () => {
	return (
		<Provider store={store}>
			<AppStack />
		</Provider>
	);
};

export default App
