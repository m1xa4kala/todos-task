import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import TodosFooter from '../components/TodosFooter/TodosFooter'
import TodosInput from '../components/TodosInput/TodosInput'
import TodosList from '../components/TodosList/TodosList'

const Todos: React.FC = () => {
	const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.100')

	return (
		<>
			<Heading fontWeight="light" fontSize="7xl">
				Todos
			</Heading>
			<Box boxShadow="xl" borderColor={borderColor} borderWidth="thin">
				<TodosInput />
				<TodosList />
                <TodosFooter/>
			</Box>
		</>
	)
}

export default Todos
