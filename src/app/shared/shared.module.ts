import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ControlMessagesComponent } from './component/control-messages/control-messages.component';
import { DialogMessagesComponent } from './component/dialog-messages/dialog-messages.component';

@NgModule({
  declarations: [ControlMessagesComponent, DialogMessagesComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ControlMessagesComponent,
    DialogMessagesComponent
  ]
})
export class SharedModule {}
