import { ActionParent } from "../actions/todo.actions";
import { Todo } from "../models/todo";
import { TodoActionTypes } from "../shared/enums/todo-action-types.enum";


export const initialState: Todo[] = [
    {title: 'todo 1'},
    {title: 'todo 2'},
    {title: 'todo 3'},
];

export function TodoReducer(state = initialState, action: ActionParent): Todo[] {
    switch(action.type) {
        case TodoActionTypes.Add:
            return [...state, action.payload]
        case TodoActionTypes.Remove:
            const arr = [...state];
            [...arr.splice(action.payload, 1)]
            return arr;
        case TodoActionTypes.Edit:
            const editTodo = state[action.payload.index];
            return [...state.map((todo) => editTodo === todo ? {...todo, title: action.payload.title} : todo)]
        default: return state;
    }
}