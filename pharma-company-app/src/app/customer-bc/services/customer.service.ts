import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'api/customers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersUrl)
  }

  getCustomer(id: number): Observable<ICustomer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<ICustomer>(url)
  }

  addCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.customersUrl, customer, this.httpOptions)
  }

  updateCustomer(customer: ICustomer): Observable<any> {
    return this.http.put(this.customersUrl, customer, this.httpOptions)
  }

  deleteCustomer(customer: ICustomer | number): Observable<ICustomer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<ICustomer>(url, this.httpOptions)
  }

}
