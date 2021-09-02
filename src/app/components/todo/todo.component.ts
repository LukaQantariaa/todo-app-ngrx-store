import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { TodoRemove } from "src/app/actions/todo.actions";
import { Todo } from "src/app/models/todo";

@Component({
    selector: 'component-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    public todos: Todo[];

    constructor(
        private store: Store<{todos: Todo[]}>
    ) {
        store.pipe(select('todos')).subscribe(values => {
            console.log(values)
            this.todos = values;
        })
    }

    ngOnInit() {

    }

    public removeTodo(index: number): void {
        this.store.dispatch(new TodoRemove(index));
    }
    
}