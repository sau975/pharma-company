import { MainPipeModule } from './../main-pipe/main-pipe.module';
import { AutheticatedUserComponent } from './components/autheticated-user/autheticated-user.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopMenuComponent,
    AutheticatedUserComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MainPipeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainPipeModule
  ],
})
export class SharedModule { }
