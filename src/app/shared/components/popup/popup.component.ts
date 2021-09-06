import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TabStore } from "src/app/store/tab.store";
import { TodoActionTypes } from "../../enums/todo-action-types.enum";
import { IPopupConfig } from "../../models/IPopup.model";

@Component({
    selector: 'shared-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class SharedPopupComponent implements OnInit {

    public value: string = "";
    public valueChanged: boolean = false;

    @Input('config') config: IPopupConfig;
    @Output() onClose = new EventEmitter<any>();
    @Output() onSave = new EventEmitter<{title: string, index: number}>();

    constructor(
        private tabStore: TabStore
    ) {}

    ngOnInit() {
        this.config.type === TodoActionTypes.Edit && this.config.todo && (this.value = this.config.todo.title);
    }

    public onSaveClick(): void {
        // If Edit
        if(this.config.type === TodoActionTypes.Edit && this.config.todo && this.value.length > 0) {
            this.onSave.next({
                title: this.value,
                index: this.config.todo?.index
            })
            // Close
            this.onCloseClick();
        }
    }

    public onCloseClick(): void {
        this.onClose.next()
    }

    public valuechange(event: any): void {
        !this.valueChanged && (this.valueChanged = true)
    }

}