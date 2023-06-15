import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'location-create-root',
  templateUrl: './location.component.html'
})
export class LocationCreateComponent implements OnInit {
  public _http: HttpClient;

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    packageWeight: ['', [Validators.required]]
  });

  constructor(http: HttpClient, private fb: FormBuilder) {
    this._http = http;
  }
  ngOnInit(): void {
  }

  get name(): any {
    return this.registerForm.get('name');
  }
  get packageWeight(): any {
    return this.registerForm.get('packageWeight');
  }

  Create(): void {
    const formData = this.registerForm.value;
    const location = {
      name: formData.name,
      packageWeight: formData.packageWeight
    }
    this._http.post<Location>('/location', location).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}

interface Location {
  id: string
  name: string
  packageWeight: number
}
