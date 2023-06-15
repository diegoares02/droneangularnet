import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LocationComponent } from './location.component';

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [LocationComponent]
})
export class DroneModule { }
