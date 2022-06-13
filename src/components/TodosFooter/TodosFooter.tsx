import React from 'react'
import { Button, Flex, Hide, Text } from '@chakra-ui/react'
import TodosFilter from './FilterControl/TodosFilter'
import { useAppDispatch, useAppSelector } from '../../store'
import { clearCompleted } from '../../store/todosSlice'
import { getActiveTodos } from '../../store/selectors'

const TodosFooter: React.FC = () => {
	const todos = useAppSelector((state) => getActiveTodos(state))

	const dispatch = useAppDispatch()

	const clearHandler = () => {
		dispatch(clearCompleted())
	}

	return (
		<Flex
			alignItems="center"
			justifyContent={['space-between', 'space-around']}
			p={2}
		>
			<Hide breakpoint="(max-width: 510px)">
				<Text fontSize="md" fontWeight="light">
					{todos.length} items left
				</Text>
			</Hide>
			<TodosFilter />
			<Button variant='ghost' fontSize="md" fontWeight="light" onClick={clearHandler} data-testid='clear-completed-btn'>
				Clear completed
			</Button>
		</Flex>
	)
}

export default TodosFooter
