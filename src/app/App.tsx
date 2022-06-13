import * as React from 'react'
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Routes, Route } from 'react-router-dom'
import Todos from '../Pages/Todos'
import NotFound from '../Pages/NotFound'
const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={['0', '3']}>
				<ColorModeSwitcher justifySelf="flex-end" />
				<VStack spacing={4}>
					<Routes>
						<Route path="/" element={<Todos />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</VStack>
			</Grid>
		</Box>
	</ChakraProvider>
)

export default App
