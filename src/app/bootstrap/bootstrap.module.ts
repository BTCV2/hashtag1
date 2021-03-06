import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  declarations: []
})
export class BootstrapModule { }
