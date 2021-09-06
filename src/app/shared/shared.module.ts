import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedPopupComponent } from './components/popup/popup.component';

@NgModule({
    declarations: [
        SharedPopupComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ], 
    exports: [
        SharedPopupComponent
    ]
})
export class SharedModule { }