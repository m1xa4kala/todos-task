import React from 'react'
import { List, Text } from '@chakra-ui/react'
import { ITodo } from '../../models/todoModel'
import TodoItem from './TodoItem/TodoItem'

const TodosList: React.FC = () => {
	const todos: ITodo[] = [
		{ id: 1, title: 'Create app', completed: true },
		{ id: 2, title: 'Create tests', completed: false },
		{ id: 3, title: 'Complite tests', completed: false },
		{ id: 4, title: 'Deploy app', completed: false },]
	if (todos.length)
		return (
			<List textAlign="start" px="2" pt="3" spacing={3}>
				{todos.map((todo) => {
					return <TodoItem key={todo.id} todo={todo} />
				})}
			</List>
		)
	return <Text px='2' pt='3'>Add your first todo :&#41;</Text>
}

export default TodosList
