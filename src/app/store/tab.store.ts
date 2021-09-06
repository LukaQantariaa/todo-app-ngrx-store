import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IPopupConfig } from "../shared/models/IPopup.model";

@Injectable({
  providedIn: 'root'
})
export class TabStore {
    public editTodo$: Subject<{title: string, index: number}> = new Subject();
    public popupState$: Subject<IPopupConfig> = new Subject();
}