import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LocationCreateComponent } from './location.component';

@NgModule({
  declarations: [
    LocationCreateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [LocationCreateComponent]
})
export class DroneModule { }
