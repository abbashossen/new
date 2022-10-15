import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { UsernameComponent } from 'src/app/component/username/username.component';
import { HomePageRoutingModule } from './home-routing.module';
import { PasswordComponent } from '../../component/password/password.component';
import { CaInputComponent } from 'src/app/component/ca-input/ca-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, PasswordComponent, UsernameComponent, CaInputComponent]
})
export class HomePageModule {}
