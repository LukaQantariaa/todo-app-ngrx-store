import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { TodoEdit, TodoRemove } from "src/app/actions/todo.actions";
import { Todo } from "src/app/models/todo";
import { TodoActionTypes } from "src/app/shared/enums/todo-action-types.enum";
import { TabStore } from "src/app/store/tab.store";

@Component({
    selector: 'component-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

    public todos: Todo[];

    private subs: Subscription[] = []

    constructor(
        private store: Store<{todos: Todo[]}>,
        private tabStore: TabStore
    ) {
        store.pipe(select('todos')).subscribe(values => {
            console.log(values)
            this.todos = values;
        })
    }

    ngOnInit(): void {
        this.detectTodoChange$();
    }

    private detectTodoChange$(): void {
        const sub = this.tabStore.editTodo$.subscribe(res => {
            this.editTodo(res.title, res.index)
        })
        this.subs.push(sub)
    }

    // Remove Todo
    public removeTodo(index: number): void {
        this.store.dispatch(new TodoRemove(index));
    }

    // Edito Todo
    private editTodo(title: string, index: number): void {
        this.store.dispatch(new TodoEdit({index: index, title: title}))
    }

    public onEditClick(index: number): void {
        this.tabStore.popupState$.next({
            type: TodoActionTypes.Edit,
            todo: {title: this.todos[index].title, index: index},
            show: true
        })
    }

    ngOnDestroy(): void {
        this.subs.forEach(subscription => {
            subscription.unsubscribe();
        })
    }
    
}