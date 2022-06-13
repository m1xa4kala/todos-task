import { Box, RadioProps, useColorModeValue, useRadio } from '@chakra-ui/react'
import React from 'react'

const RadioCard: React.FC<RadioProps> = (props) => {
	const { getInputProps, getCheckboxProps } = useRadio(props)
	const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.100')
	const hoverColor = useColorModeValue('gray.100', 'whiteAlpha.200')
	const input = getInputProps()
	const checkbox = getCheckboxProps()

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				fontWeight="light"
				fontSize="md"
				cursor="pointer"
				borderRadius="md"
				_checked={{
					borderWidth: '1px',
					borderColor: borderColor,
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				_hover={{
					backgroundColor: hoverColor,
				}}
				px={3}
				py={2}
				data-testid={`filter-${props.value}`}
			>
				{props.children}
			</Box>
		</Box>
	)
}

export default RadioCard
