import { Component, OnInit, Input } from '@angular/core';
import { inputoption } from '../interface';

@Component({
  selector: 'app-ca-input',
  templateUrl: './ca-input.component.html',
  styleUrls: ['./ca-input.component.scss'],
})
export class CaInputComponent implements OnInit {
  @Input() option: inputoption;
  constructor() { }

  ngOnInit() {}

}
