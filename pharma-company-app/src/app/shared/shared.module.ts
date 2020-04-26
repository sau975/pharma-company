import { MainPipeModule } from './../main-pipe/main-pipe.module';
import { AutheticatedUserComponent } from './components/autheticated-user/autheticated-user.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MainPipeModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainPipeModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class SharedModule { }
