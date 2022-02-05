import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
