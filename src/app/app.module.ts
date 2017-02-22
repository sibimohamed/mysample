import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ButtonListComponent} from '../component/button-list/button-list.component';
import {RotateColumnComponent} from '../component/rotate-column/rotate-column.component';
import { ModalDialogComponent} from '../component/modal-dialog/modal-dialog.component';
import { ModalDialogService } from '../component/modal-dialog/modal-dialog.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RotateColumnComponent,
    ButtonListComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ModalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
