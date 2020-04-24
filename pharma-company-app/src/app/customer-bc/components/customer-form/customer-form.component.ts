import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Location } from '@angular/common';
import { ICustomer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  @Input() customer: ICustomer;

  customers: ICustomer[];

  constructor(
    private location: Location,
    private customerService: CustomerService
    ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string,email: string,dob: Date,medicine: string,country: string): void {
    name = name.trim();
    if (!name) { return; }
    this.customerService.addCustomer({ name,email,dob,medicine,country } as ICustomer)
      .subscribe(customer => {
        this.customers.push(customer)
      });

      this.location.back();
  }

}
