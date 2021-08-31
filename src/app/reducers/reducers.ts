import { Todo } from '../models/todo';
import { ActionReducerMap } from "@ngrx/store"
import { TodoReducer } from './todo.reducer'

export interface AppState {
    todos: Todo[]
}

export const reducers: ActionReducerMap<AppState, any> = {
    todos: TodoReducer
}