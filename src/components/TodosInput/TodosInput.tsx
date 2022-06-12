import React from 'react'
import {
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	useColorModeValue,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const TodosInput: React.FC = () => {
	const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.100')

	return (
		<InputGroup width="xl" size="lg">
			<Input
				borderRadius="none"
				border={0}
				borderBottom="1px"
				borderBottomColor={borderColor}
				pr="4.5rem"
				placeholder="What needs to be done?"
				required
			/>
			<InputRightElement pr={2}>
				<IconButton
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
