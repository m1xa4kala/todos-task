import { render, fireEvent } from '../test-utils'
import userEvent from '@testing-library/user-event'
import Todos from './Todos'
import { Filter } from '../store/todosSlice'

global.matchMedia =
	global.matchMedia ||
	function () {
		return {
			matches: false,
			onchange: null,
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		}
	}

describe('Todos page tests', () => {
	it('add todo work', async () => {
		const initialState = {
			todos: {
				currentFilter: Filter.ALL,
				todos: [],
			},
		}
		const { getByTestId, getByRole, getAllByRole, getByText } = render(
			<Todos />,
			initialState
		)
		const input = getByRole('textbox')
		const addButton = getByTestId('add-button')

		expect(getByText(/Add your first todo/i)).toBeInTheDocument()
		userEvent.type(input, 'My test todo')
		fireEvent.click(addButton)
		expect(getAllByRole('listitem')).toHaveLength(1)
	})
	it('complete todo work', () => {
		const initialState = {
			todos: {
				currentFilter: Filter.ALL,
				todos: [
					{
						id: '1',
						title: 'test todo',
						completed: true,
					},
				],
			},
		}
		const { getByTestId } = render(<Todos />, initialState)
		const icon = getByTestId('check-icon')
		const button = getByTestId('icon-button')
		expect(icon).toBeInTheDocument()
		fireEvent.click(button)
		expect(icon).not.toBeInTheDocument()
	})
	it('todos filtering work', () => {
		const initialState = {
			todos: {
				currentFilter: Filter.ALL,
				todos: [
					{
						id: '1',
						title: 'test todo',
						completed: false,
					},
					{
						id: '2',
						title: 'test completed todo1',
						completed: true,
					},
					{
						id: '3',
						title: 'test completed todo2',
						completed: true,
					},
				],
			},
		}

		const { getByTestId, getAllByRole } = render(<Todos />, initialState)

		const filterAll = getByTestId('filter-All')
		const filterActive = getByTestId('filter-Active')
		const filterCompleted = getByTestId('filter-Completed')

		expect(getAllByRole('listitem')).toHaveLength(3)
		fireEvent.click(filterActive)
		expect(getAllByRole('listitem')).toHaveLength(1)
		fireEvent.click(filterCompleted)
		expect(getAllByRole('listitem')).toHaveLength(2)
		fireEvent.click(filterAll)
		expect(getAllByRole('listitem')).toHaveLength(3)
	})
	it('clearing complited work', () => {
		const initialState = {
			todos: {
				currentFilter: Filter.ALL,
				todos: [
					{
						id: '1',
						title: 'test todo',
						completed: false,
					},
					{
						id: '2',
						title: 'test completed todo1',
						completed: true,
					},
					{
						id: '3',
						title: 'test completed todo2',
						completed: true,
					},
				],
			},
		}

		const { getByTestId, getAllByRole } = render(<Todos />, initialState)

		const clearBtn = getByTestId('clear-completed-btn')

		expect(getAllByRole('listitem')).toHaveLength(3)
		fireEvent.click(clearBtn)
		expect(getAllByRole('listitem')).toHaveLength(1)
	})
})
