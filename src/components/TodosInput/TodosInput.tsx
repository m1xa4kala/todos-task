import React from 'react'
import {
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	useColorModeValue,
} from '@chakra-ui/react'
import PlusIcon from '../../Icons/PlusIcon'

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
			/>
			<InputRightElement pr={2} width="40px">
				<IconButton
					_hover={{
						background: 'none',
						transform: 'scale(1.1)',
					}}
					background="none"
					width="40px"
					aria-label="Add todo"
					icon={<PlusIcon />}
				/>
			</InputRightElement>
		</InputGroup>
	)
}

export default TodosInput
