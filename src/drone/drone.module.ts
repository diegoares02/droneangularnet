import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DroneComponent } from './drone.component';

@NgModule({
  declarations: [
    DroneComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [DroneComponent]
})
export class DroneModule { }
