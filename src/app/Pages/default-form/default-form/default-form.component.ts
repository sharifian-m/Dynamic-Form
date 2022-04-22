import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormFieldService } from 'src/app/Core/Services/form-field.service';

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.scss']
})
export class DefaultFormComponent implements OnInit {
// loading!:boolean;
  constructor(private router:Router,
    private formService: FormFieldService) { }

  ngOnInit(): void {
   
  }
  createCustomForm(){
    // this.formService.currentLoading$.subscribe(x=>{
    //   this.loading=x;
    // })
    // console.log(this.loading);
this.formService.setLoading(true)
this.router.navigate(['/custom']);

  }
}
