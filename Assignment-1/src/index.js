import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'rsuite/dist/rsuite.min.css';
ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
