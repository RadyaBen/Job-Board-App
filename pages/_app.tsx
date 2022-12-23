import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { wrapper } from '../redux/store';

import '../styles/globals.css';

const App = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	);
};

export default App;