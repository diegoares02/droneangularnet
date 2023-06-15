import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public locationModal: any;
  public droneModal: any;
  public droneLocations?: DroneLocation[];

  constructor(http: HttpClient) {
    http.get<DroneLocation[]>('/dronelocationprocess').subscribe(result => {
      this.droneLocations = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
    this.locationModal = new window.bootstrap.Modal(
      document.getElementById('locationCreation')
    );
    this.droneModal = new window.bootstrap.Modal(
      document.getElementById('droneCreation')
    );
  }

  openLocationModal() {
    this.locationModal.show();
  }
  openDroneModal() {
    this.droneModal.show();
  }
}

interface DroneLocation {
  droneName: string
  trips: string
}
