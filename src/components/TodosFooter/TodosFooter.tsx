import React from 'react'
import { Flex, Hide, Text } from '@chakra-ui/react'
import TodosFilter from './FilterControl/TodosFilter'

const TodosFooter: React.FC = () => {
	return (
		<Flex
			alignItems="center"
			justifyContent={['space-between', 'space-around']}
			p={2}
		>
			<Hide breakpoint="(max-width: 510px)">
				<Text fontSize="md" fontWeight="light">
					2 items left
				</Text>
			</Hide>
			<TodosFilter />
			<Text fontSize="md" fontWeight="light">
				Clear completed
			</Text>
		</Flex>
	)
}

export default TodosFooter
