import { TodoActionTypes } from "../enums/todo-action-types.enum";


export interface IPopupConfig {
    type: TodoActionTypes,
    todo?: {
        title: string,
        index: number
    }
    show: boolean
}