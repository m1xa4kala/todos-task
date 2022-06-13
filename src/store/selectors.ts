import { RootState } from './index'
import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { Filter } from './todosSlice'
const selectSelf = (state: RootState) => state

export const getAllTodos = createDraftSafeSelector(
	selectSelf,
	(state) => state.todos.todos
)
export const getCurrentFilter = createDraftSafeSelector(
	selectSelf,
	(state) => state.todos.currentFilter
)

export const getFilteredTodos = createSelector(
	[getAllTodos, getCurrentFilter],
	(todos, filter) => {
		switch (filter) {
			case Filter.ALL:
				return todos
			case Filter.ACTIVE:
				return todos.filter((todo) => todo.completed === false)
			case Filter.COMPLETED:
				return todos.filter((todo) => todo.completed === true)
			default:
				break
		}
	}
)

export const getActiveTodos = createSelector(getAllTodos, (todos) =>
	todos.filter((todo) => todo.completed === false)
)
