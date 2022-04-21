import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { defaultFields } from 'src/app/models/defaultFields';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
@Input() formFields!:defaultFields[];
  constructor(private router:Router) { }

  ngOnInit(): void {
console.log(this.formFields);

  }


}
