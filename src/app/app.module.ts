import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DroneComponent } from '../drone/drone.component';
import { DroneCreateComponent } from '../drone/create/drone.component';
import { LocationComponent } from '../location/location.component';
import { LocationCreateComponent } from '../location/create/location.component';

@NgModule({
  declarations: [
    AppComponent,
    DroneComponent,
    DroneCreateComponent,
    LocationComponent,
    LocationCreateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, DroneComponent]
})
export class AppModule { }
