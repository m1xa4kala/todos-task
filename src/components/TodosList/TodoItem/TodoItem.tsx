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

interface ITodoItemProps {
	todo: ITodo
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
	const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.100')
	return (
		<ListItem borderBottom="1px" borderBottomColor={borderColor} pb={2}>
			<HStack>
				{todo.completed ? (
					<Circle
						size="30px"
						color="green.400"
						border="1px"
						borderColor={borderColor}
					>
						<IconButton
							background="none"
							_hover={{
								background: 'none',
							}}
							_active={{
								background: 'none',
							}}
							aria-label="Completed todo"
							icon={<CheckIcon boxSize={5} color="green.300" />}
						/>
					</Circle>
				) : (
					<Circle
						size="30px"
						color="green.400"
						border="1px"
						borderColor={borderColor}
					>
						<IconButton
							background="none"
							_hover={{
								background: 'none',
							}}
							_active={{
								background: 'none',
							}}
							aria-label="Active todo"
							icon={undefined}
						/>
					</Circle>
				)}

				<Text>{todo.title}</Text>
			</HStack>
		</ListItem>
	)
}

export default TodoItem
