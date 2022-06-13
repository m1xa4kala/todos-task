import React from 'react'
import { HStack, useRadioGroup } from '@chakra-ui/react'
import RadioCard from './RadioCard'
import { Filter, setCurrentFilter } from '../../../store/todosSlice'
import { useAppDispatch } from '../../../store'

const TodosFilter: React.FC = () => {
	const options = [Filter.ALL, Filter.ACTIVE, Filter.COMPLITED]
	const dispatch = useAppDispatch()
	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'todos',
		defaultValue: Filter.ALL,
		onChange: (value: Filter) => dispatch(setCurrentFilter(value)),
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
