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
        name: "Saurav Kumar",
        email: "saurav97531@gmail.com",
        dob: new Date("1997-02-02"),
        medicine: "Lexapro",
        country: "India"
      },
      {
        id: 2,
        name: "Benton Berry",
        email: "bentonberry@colaire.com",
        dob: new Date("1982-01-01"),
        medicine: "Ativan",
        country: "Angola"
      },
      {
        id: 3,
        name: "Conrad Ochoa",
        email: "conradochoa@colaire.com",
        dob: new Date("1985-01-01"),
        medicine: "Lyrica",
        country: "Mauritania"
      },
      {
        id: 4,
        name: "Lorie Rutledge",
        email: "lorierutledge@colaire.com",
        dob: new Date("1993-01-01"),
        medicine: "Prednisone",
        country: "New Zealand"
      },
      {
        id: 5,
        name: "Tami Gross",
        email: "tamigross@colaire.com",
        dob: new Date("1997-01-01"),
        medicine: "Lorazepam",
        country: "Nauru"
      },
      {
        id: 6,
        name: "Sally Hanson",
        email: "sallyhanson@colaire.com",
        dob: new Date("2000-01-01"),
        medicine: "Adderall",
        country: "Kuwait"
      }
    ];

    return {customers};
  }

  genId(customers: ICustomer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 11;
  }
}
