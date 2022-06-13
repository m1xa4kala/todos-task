import { CheckIcon } from '@chakra-ui/icons'
import {
	Circle,
	HStack,
	IconButton,
	ListItem,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { ITodo } from '../../../models/todoModel'
import { useAppDispatch } from '../../../store'
import { toggleComplete } from '../../../store/todosSlice'

interface ITodoItemProps {
	todo: ITodo
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
	const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.100')
	const dispatch = useAppDispatch()
	const completeHandler = () => {
		dispatch(
			toggleComplete({
				id: todo.id,
				title: todo.title,
				completed: !todo.completed,
			})
		)
	}
	return (
		<ListItem borderBottom="1px" borderBottomColor={borderColor} pb={2}>
			<HStack>
				<Circle
					size="30px"
					color="green.400"
					border="1px"
					borderColor={borderColor}
				>
					<IconButton
						onClick={completeHandler}
						background="none"
						_hover={{
							background: 'none',
						}}
						_active={{
							background: 'none',
						}}
						aria-label={
							todo.completed ? 'Completed todo' : 'Active todo'
						}
						icon={
							todo.completed ? (
								<CheckIcon data-testid='check-icon' boxSize={5} color="green.300" />
							) : undefined
						}
						data-testid='icon-button'
					/>
				</Circle>
				<Text>{todo.title}</Text>
			</HStack>
		</ListItem>
	)
}

export default TodoItem
