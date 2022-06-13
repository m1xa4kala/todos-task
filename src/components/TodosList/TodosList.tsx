import React from 'react'
import { List, Text } from '@chakra-ui/react'
import TodoItem from './TodoItem/TodoItem'
import { useAppSelector } from '../../store'
import { getFilteredTodos } from '../../store/selectors'

const TodosList: React.FC = () => {
	const todos = useAppSelector((state) => getFilteredTodos(state))
	if (todos?.length)
		return (
			<List textAlign="start" px="2" pt="3" spacing={3}>
				{todos.map((todo) => {
					return <TodoItem key={todo.id} todo={todo} />
				})}
			</List>
		)
	return (
		<Text px="2" pt="3">
			Add your first todo :&#41;
		</Text>
	)
}

export default TodosList
