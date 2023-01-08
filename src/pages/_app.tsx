import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '@/assets/styles/index.scss'

import { wrapper } from '@/store/store'

const MyApp = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest)

	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	)
}

export default MyApp
