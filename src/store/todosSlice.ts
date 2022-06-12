import { ITodo } from './../models/todoModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITodosState {
	todos: ITodo[]
}

const initialState: ITodosState = {
	todos: [
		{ id: '1', title: 'Create app', completed: true },
		{ id: '2', title: 'Create tests', completed: false },
		{ id: '3', title: 'Complite tests', completed: false },
		{ id: '4', title: 'Deploy app', completed: false },
	],
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state: ITodosState, action: PayloadAction<ITodo>) {
			state.todos.push(action.payload)
		},
	},
})

export const {addTodo} = todosSlice.actions

export default todosSlice.reducer
