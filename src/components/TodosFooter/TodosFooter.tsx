import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import TodosFilter from './FilterControl/TodosFilter'

const TodosFooter: React.FC = () => {
	return (
		<Flex alignItems="center" justifyContent="space-around" py={2}>
			<Text fontSize="md" fontWeight="light">
				2 items left
			</Text>
			<TodosFilter />
			<Text fontSize="md" fontWeight="light">
				Clear completed
			</Text>
		</Flex>
	)
}

export default TodosFooter
