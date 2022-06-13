import { Filter } from '../../store/todosSlice'
import { screen, render } from '../../test-utils'
import TodoList from './TodosList'

describe('TodoList tests', () => {
	it('Component should render with items', () => {
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
		render(<TodoList />, initialState)
		expect(screen.getAllByRole('listitem')).toHaveLength(3)
	})
	it('Component should render without items', () => {
		const initialState = {
			todos: {
				currentFilter: Filter.ALL,
				todos: [],
			},
		}
		render(<TodoList />, initialState)
		expect(screen.getByText(/Add your first todo/i)).toBeInTheDocument()
	})
})
