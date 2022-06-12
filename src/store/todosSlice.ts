import { ITodo } from './../models/todoModel';
import { createSlice } from "@reduxjs/toolkit";

interface todosState {
    todos: ITodo[],
}

const initialState: todosState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        
    }
})

export default todosSlice.reducer