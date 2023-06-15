import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'drone-create-root',
  templateUrl: './drone.component.html'
})
export class DroneCreateComponent implements OnInit {
  public drones?: Drone[];
  public _http: HttpClient;

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    maxWeight: ['', [Validators.required]]
  });

  constructor(http: HttpClient, private fb: FormBuilder) {
    this._http = http;
  }
  ngOnInit(): void {
  }

  get name(): any {
    return this.registerForm.get('name');
  }
  get maxWeight(): any {
    return this.registerForm.get('maxWeight');
  }

  Create(): void {
    const formData = this.registerForm.value;
    console.log(formData);
    const drone = {
      name: formData.name,
      maxWeight: formData.maxWeight
    }
    this._http.post<Drone>('/drone', drone).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}

interface Drone {
  id: string
  name: string
  maxWeight: number
}
