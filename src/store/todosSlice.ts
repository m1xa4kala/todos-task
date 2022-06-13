import { ITodo } from './../models/todoModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Filter {
	ALL = 'All',
	ACTIVE = 'Active',
	COMPLETED = 'Completed',
}

export interface ITodosState {
	currentFilter: Filter
	todos: ITodo[]
}

const initialState: ITodosState = {
	todos: [],
	currentFilter: Filter.ALL,
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state: ITodosState, action: PayloadAction<ITodo>) {
			state.todos.push(action.payload)
		},
		setCurrentFilter(state: ITodosState, action: PayloadAction<Filter>) {
			state.currentFilter = action.payload
		},
		clearCompleted(state: ITodosState) {
			if (state.todos.some((todo) => todo.completed === true)) {
				state.todos = state.todos.filter(
					(todo) => todo.completed === false
				)
			}
		},
		toggleComplete(state: ITodosState, action: PayloadAction<ITodo>) {
			const index = state.todos.findIndex(
				(todo) => todo.id === action.payload.id
			)
			state.todos[index].completed = action.payload.completed
		},
	},
})

export const { addTodo, setCurrentFilter, clearCompleted, toggleComplete } =
	todosSlice.actions

export default todosSlice.reducer
