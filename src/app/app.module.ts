import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BootstrapModule} from './bootstrap/bootstrap.module';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CollectionsComponent } from './collections/collections.component';
import { BestOfAzhagiComponent } from './best-of-azhagi/best-of-azhagi.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CollectionsComponent,
    BestOfAzhagiComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
