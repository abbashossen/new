import { Component, Input, OnInit } from '@angular/core';
import { HomePage } from 'src/app/pages/home/home.page';
import { inputoption } from '../interface';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  optionPassword: inputoption;

  constructor(private homepage: HomePage) {
    this.optionPassword={
      required: true,
      type: 'password',
      minlength: 5,
      formcontrolname: 'password',
      formgroup: this.homepage.loginform



    };
  }

  ngOnInit() {}

}
