import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { reducers } from './reducers/reducers'
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
