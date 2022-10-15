import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../signup/signup.model';
import { SignupService } from '../../services/signup.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
    signups: Signup[];
  public loginform = new FormGroup({
  user: new FormControl(''),
  password: new FormControl('')
});
username: string;
  constructor(private router: Router,
    private signupservice: SignupService,
    private homeservice: HomeService) {

  }

  ngoninit(){
    this.homeservice.setlogout();
  }

  onSubmit(form: NgForm){

       this.signups=this.signupservice.signup;
       console.log(form.value.username +' '+ form.value.password);
      if(form.value.username === this.signups[1].username && form.value.password === this.signups[1].password){
          form.reset();
        this.homeservice.setlogin();

      this.router.navigate(['/home-page']);

    }
    else{
        alert('username or password incorrect');
    }

  }

  login(){
    console.log(this.loginform);
  }

}

