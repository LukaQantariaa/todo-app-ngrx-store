import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoAdd } from "src/app/actions/todo.actions";
import { Todo } from "src/app/models/todo";

@Component({
    selector: 'component-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

    constructor(
        private store: Store<{todos: Todo[]}>
    ) {}

    ngOnInit() {

    }

    private addTodo(todo: string): void {
        const newTodo = new Todo();
        newTodo.title = todo;
        this.store.dispatch(new TodoAdd(newTodo))
    }

    public onAddTodoBtnClick(todo: string): void {
        todo? this.addTodo(todo) : console.error('todo is empty');
    }
}