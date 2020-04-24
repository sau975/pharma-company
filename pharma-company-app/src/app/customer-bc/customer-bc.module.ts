import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { Routes, RouterModule } from '@angular/router';
import { AutheticatedUserComponent } from '../shared/components/autheticated-user/autheticated-user.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

const routes :Routes =[

  {
  path: 'customerBc',
  component: AutheticatedUserComponent,
  children: [
            {path:'customers',component:CustomerListComponent},
            {path:'customers/:id',component:CustomerFormComponent},
            {path:'customers/edit/:id',component:CustomerEditComponent},
            {path: '', redirectTo: 'customers',pathMatch: 'full'},

        ]
  }
];


@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),

  ]
})
export class CustomerBcModule { }
