import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { store } from '../redux';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return <Provider store={store}>
		<Component {...pageProps} />
	</Provider>
};

export default App;