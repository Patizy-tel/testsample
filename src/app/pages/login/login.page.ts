import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  constructor(private route: Router) { }

  ngOnInit() {

    this.createLoginForm();
  }


  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }



  loginAction(){
    this.route.navigate(['register']);


  }


  goHome($event){
    if(this.loginForm.valid){
       this.route.navigate(['home'])
    }
  }
}
