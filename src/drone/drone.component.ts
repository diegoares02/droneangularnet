import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'drone-root',
  templateUrl: './drone.component.html'
})
export class DroneComponent {
  public drones?: Drone[];

  constructor(http: HttpClient) {
    http.get<Drone[]>('/drone').subscribe(result => {
      this.drones = result;
    }, error => console.error(error));
  }


}

interface Drone {
  id: string
  name: string
  maxWeight: number
}
