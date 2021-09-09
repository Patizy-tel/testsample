import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  registerAction(){

    this.route.navigate(['/register'])




  } 

  loginAction(){

    this.route.navigate(['/login'])




  }
}
