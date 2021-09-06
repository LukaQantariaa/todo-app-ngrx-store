import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';
import { TodoActionTypes } from '../shared/enums/todo-action-types.enum';

export class ActionParent implements Action {
    type: any;
    payload: any;
}

export class TodoAdd implements ActionParent {
    type = TodoActionTypes.Add;

    constructor(public payload: Todo) {

    }
}

export class TodoRemove implements ActionParent {
    type = TodoActionTypes.Remove;

    constructor(public payload: number) {

    }
}

export class TodoEdit implements ActionParent {
    type = TodoActionTypes.Edit;

    constructor(public payload: {index: number, title: string}) {

    }
}