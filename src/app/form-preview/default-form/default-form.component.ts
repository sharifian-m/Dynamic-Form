import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.scss']
})
export class DefaultFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  createCustomForm(){
this.router.navigate(['custom']);
  }
}
