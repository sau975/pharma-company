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
        dob: "19-08-1996",
        medicine: "Sampson",
        country: "Poland"
      },
      {
        id: 2,
        name: "Benton Berry",
        email: "bentonberry@colaire.com",
        dob: "09-02-2011",
        medicine: "Sparks",
        country: "Angola"
      },
      {
        id: 3,
        name: "Conrad Ochoa",
        email: "conradochoa@colaire.com",
        dob: "19-03-2001",
        medicine: "Castro",
        country: "Mauritania"
      },
      {
        id: 4,
        name: "Lorie Rutledge",
        email: "lorierutledge@colaire.com",
        dob: "28-05-2007",
        medicine: "Beard",
        country: "New Zealand"
      },
      {
        id: 5,
        name: "Tami Gross",
        email: "tamigross@colaire.com",
        dob: "16-09-2005",
        medicine: "Weaver",
        country: "Nauru"
      },
      {
        id: 6,
        name: "Sally Hanson",
        email: "sallyhanson@colaire.com",
        dob: "08-10-2019",
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
