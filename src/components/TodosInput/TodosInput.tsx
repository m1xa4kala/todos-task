import React, {
	ChangeEventHandler,
	useId,
	useState,
} from 'react'
import {
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	useColorModeValue,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../../store'
import { addTodo } from '../../store/todosSlice'

const TodosInput: React.FC = () => {
	const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.100')
	const dispatch = useAppDispatch()
	const [title, setTitle] = useState<string>('')
	const id = useId()
	const inputHandler: ChangeEventHandler<HTMLInputElement> = (event) =>
		setTitle(event.target.value)

	const addTodoHandler = () =>{
		dispatch(addTodo({ id: id, title: title, completed: false }))
		setTitle('')
	}

	return (
		<InputGroup width={['sm', 'md', 'lg', 'xl', '2xl']}>
			<Input
				size={['md', 'lg']}
				border="none"
				borderBottom="1px"
				borderBottomColor={borderColor}
				pr="4.5rem"
				placeholder="What needs to be done?"
				value={title}
				onChange={inputHandler}
				required
			/>
			<InputRightElement pr={2}>
				<IconButton
					onClick={addTodoHandler}
					_hover={{
						background: 'none',
						transform: 'scale(1.2)',
					}}
					_active={{ background: 'none' }}
					background="none"
					aria-label="Add todo"
					icon={<AddIcon boxSize={6} color="green.300" />}
				/>
			</InputRightElement>
		</InputGroup>
	)
}

export default TodosInput
