import { Component, OnInit } from '@angular/core';
import { inputoption } from '../interface';
import { HomePage } from 'src/app/pages/home/home.page';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {
// eslint-disable-next-line @typescript-eslint/member-ordering

optionusername: inputoption;
  constructor(private homepage: HomePage) {
    this.optionusername={
      required: true,
      type: 'text',
      formcontrolname: 'user',
      formgroup: this.homepage.loginform,
      minlength: 5


    };
   }

  ngOnInit() {}

}
