import * as React from 'react'
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Todos from '../Pages/Todos'
const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={['0', '3']}>
				<ColorModeSwitcher justifySelf="flex-end" />
				<VStack spacing={4}>
					<Todos />
				</VStack>
			</Grid>
		</Box>
	</ChakraProvider>
)

export default App
