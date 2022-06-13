import {
	getAllTodos,
	getActiveTodos,
	getCurrentFilter,
	getFilteredTodos,
} from './selectors'
import { Filter } from './todosSlice'

describe('selectors tests', () => {
	it('get all todos work', () => {
		expect(
			getAllTodos({ todos: { todos: [], currentFilter: Filter.ALL } })
		).toStrictEqual([])
	})
	it('get active todos work', () => {
		expect(
			getActiveTodos({
				todos: {
					todos: [
						{ id: '1', title: 'test todo1', completed: true },
						{ id: '2', title: 'test todo2', completed: false },
					],
					currentFilter: Filter.ALL,
				},
			})
		).toStrictEqual([{ id: '2', title: 'test todo2', completed: false }])
	})
	it('get current filter work', () => {
		expect(
			getCurrentFilter({
				todos: { todos: [], currentFilter: Filter.COMPLITED },
			})
		).toBe(Filter.COMPLITED)
	})
	it('get filtered todos work', () => {
		expect(
			getFilteredTodos({
				todos: {
					todos: [
						{ id: '1', title: 'test todo1', completed: true },
						{ id: '2', title: 'test todo2', completed: false },
					],
					currentFilter: Filter.COMPLITED,
				},
			})
		).toStrictEqual([{ id: '1', title: 'test todo1', completed: true }])
	})
})
