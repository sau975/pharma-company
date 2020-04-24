import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/customer';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {
        id: 1,
        name: "Odonnell Mcclure",
        email: "odonnellmcclure@colaire.com",
        dob: new Date("1980-01-01"),
        medicine: "Sampson",
        country: "Poland"
      },
      {
        id: 2,
        name: "Benton Berry",
        email: "bentonberry@colaire.com",
        dob: new Date("1982-01-01"),
        medicine: "Sparks",
        country: "Angola"
      },
      {
        id: 3,
        name: "Conrad Ochoa",
        email: "conradochoa@colaire.com",
        dob: new Date("1985-01-01"),
        medicine: "Castro",
        country: "Mauritania"
      },
      {
        id: 4,
        name: "Lorie Rutledge",
        email: "lorierutledge@colaire.com",
        dob: new Date("1993-01-01"),
        medicine: "Beard",
        country: "New Zealand"
      },
      {
        id: 5,
        name: "Tami Gross",
        email: "tamigross@colaire.com",
        dob: new Date("1997-01-01"),
        medicine: "Weaver",
        country: "Nauru"
      },
      {
        id: 6,
        name: "Sally Hanson",
        email: "sallyhanson@colaire.com",
        dob: new Date("2000-01-01"),
        medicine: "Oliver",
        country: "Kuwait"
      }
    ];

    return {customers};
  }

  genId(customers: ICustomer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 11;
  }
}
