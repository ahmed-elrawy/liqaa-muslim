import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-arab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  open: boolean = false;
  constructor() {}
  classForm = new FormGroup({
    age: new FormControl(null, [Validators.required, Validators.max(100)]),
    gender: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {}
}
