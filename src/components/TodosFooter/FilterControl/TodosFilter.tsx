import React from 'react'
import { HStack, useRadioGroup } from '@chakra-ui/react'
import RadioCard from './RadioCard'

const TodosFilter: React.FC = () => {
	const options = ['All', 'Active', 'Completed']
	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'todos',
		defaultValue: 'All',
		onChange: console.log,
	})
	const group = getRootProps()
	return (
		<HStack {...group}>
			{options.map((value) => {
				const radio = getRadioProps({ value })
				return (
					<RadioCard key={value} {...radio}>
						{value}
					</RadioCard>
				)
			})}
		</HStack>
	)
}

export default TodosFilter