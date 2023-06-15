import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DroneCreateComponent } from './drone.component';

@NgModule({
  declarations: [
    DroneCreateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [DroneCreateComponent]
})
export class DroneModule { }
