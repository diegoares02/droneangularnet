import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'location-root',
  templateUrl: './location.component.html'
})
export class LocationComponent {
  public locations?: Location[];

  constructor(http: HttpClient) {
    http.get<Location[]>('/location').subscribe(result => {
      this.locations = result;
    }, error => console.error(error));
  }


}

interface Location {
  id: string
  name: string
  packageWeight: number
}
