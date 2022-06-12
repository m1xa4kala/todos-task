import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app/App'
import store from './store'

const container = document.getElementById('root') as HTMLElement
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ColorModeScript />
			<App />
		</Provider>
	</React.StrictMode>
)
