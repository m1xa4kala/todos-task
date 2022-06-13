import { ITodo } from './../models/todoModel';
import reducer, {
	addTodo,
	setCurrentFilter,
	clearCompleted,
	toggleComplete,
	Filter,
} from './todosSlice'

describe('TodosSlice tests', () => {
	it('adding todos', () => {
		const previousState = {
			currentFilter: Filter.ALL,
			todos: [],
		}
		expect(
			reducer(
				previousState,
				addTodo({ id: '1', title: 'test todo', completed: false })
			)
		).toEqual({
			currentFilter: Filter.ALL,
			todos: [
				{
					id: '1',
					title: 'test todo',
					completed: false,
				},
			],
		})
	})
	it('changing filters', () => {
		const previousState = {
			currentFilter: Filter.ALL,
			todos: [
				{
					id: '1',
					title: 'test todo',
					completed: false,
				},
			],
		}
		expect(reducer(previousState, setCurrentFilter(Filter.ACTIVE))).toEqual(
			{
				currentFilter: Filter.ACTIVE,
				todos: [
					{
						id: '1',
						title: 'test todo',
						completed: false,
					},
				],
			}
		)
	})
	it('clearing completed todos', () => {
		const previousState = {
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
		}
		expect(reducer(previousState, clearCompleted())).toEqual({
			currentFilter: Filter.ALL,
			todos: [
				{
					id: '1',
					title: 'test todo',
					completed: false,
				},
			],
		})
	})
    it('toggling completed', () => {
		const previousState = {
			currentFilter: Filter.ALL,
			todos: [
				{
					id: '1',
					title: 'test todo',
					completed: false,
				},
			],
		}
        const todo: ITodo = {id: '1', title: 'test todo', completed: false}
		expect(reducer(previousState, toggleComplete({id: todo.id, title: todo.title, completed: !todo.completed}))).toEqual(
			{
				currentFilter: Filter.ALL,
				todos: [
					{
						id: '1',
						title: 'test todo',
						completed: true,
					},
				],
			}
		)
	})
})
