import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
public registerForm: FormGroup;
  constructor(private route: Router ,) { }

  ngOnInit() {

    this.createRegisterForm();
  }
  loginAction(x){


    if(this.registerForm.valid){
      this.route.navigate(['login'])
    }else{
      alert('please fill all the fields')
    }



  }

  private createRegisterForm() {
    this.registerForm = new FormGroup({
    
    name:new FormControl('') ,
      username:new FormControl(''),

      password: new FormControl('', Validators.required),
    });
  }


  login(){

    this.route.navigate(['login'])

  }


}
