import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux';

import App from './components/App';
import combinedReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider
		store={legacy_createStore(
			combinedReducers,
			composeEnhancers(applyMiddleware())
		)}
	>
		<App />
	</Provider>
);
