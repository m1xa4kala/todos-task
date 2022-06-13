import * as React from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import todosReducer, { Filter, ITodosState } from './store/todosSlice'
import { RootState } from './store'

function render(
	ui: React.ReactElement,
	preloadedState: RootState = {todos: {todos: [], currentFilter: Filter.ALL}},
	store = configureStore({
		reducer: { todos: todosReducer },
		preloadedState,
	}),
	options?: RenderOptions
) {
	const AllProviders = ({ children }: { children?: React.ReactNode }) => (
		<ChakraProvider theme={theme}>
			<Provider store={store}>{children}</Provider>
		</ChakraProvider>
	)
	return rtlRender(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react'

export { render }
