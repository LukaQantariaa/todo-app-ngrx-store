import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPopupConfig } from './shared/models/IPopup.model';
import { TabStore } from './store/tab.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public popupConfig: IPopupConfig;
  public showPopup: boolean;

  private subs: Subscription[] = []

  constructor(
    private tabStore: TabStore
  ) {}
  
  ngOnInit() {
    this.detectPopupChanges();
  }

  private detectPopupChanges(): void {
    const sub = this.tabStore.popupState$.subscribe(res => {
      this.showPopup = res.show;
      this.popupConfig = res;
    })
    this.subs.push(sub);
  }

  public onPopupSave(event: any): void {
    this.tabStore.editTodo$.next({
      title: event.title,
      index: event.index
    })
  }

  public onPopupClose(): void {
    this.showPopup = false;
  }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

}
