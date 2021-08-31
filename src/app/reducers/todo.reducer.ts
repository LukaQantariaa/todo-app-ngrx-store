import { TodoAdd } from "../actions/todo.actions";
import { Todo } from "../models/todo";


export const initialState: Todo[] = [
    {title: 'todo 1'},
    {title: 'todo 2'},
    {title: 'todo 3'},
];

export function TodoReducer(state = initialState, action: TodoAdd): Todo[] {
    switch(action.type) {
        default: return state;
    }
}