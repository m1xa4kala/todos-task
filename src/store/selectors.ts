import { RootState } from './index'
import { createDraftSafeSelector } from '@reduxjs/toolkit'
const selectSelf = (state: RootState) => state

export const getAllTodos = createDraftSafeSelector(
	selectSelf,
	(state) => state.todos.todos
)
export const getActiveTodos = createDraftSafeSelector(
    selectSelf,
    (state) => state.todos.todos.filter(todo => todo.completed === false)
)
export const getComplitedTodos = createDraftSafeSelector(
    selectSelf,
    (state) => state.todos.todos.filter(todo => todo.completed === true)
)