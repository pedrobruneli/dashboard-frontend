import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { ICustomer } from "../models/customer.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(private readonly httpService: HttpClient) { }

    public createCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.httpService.post<ICustomer>(`${environment.api}/customers`, customer)
    }

    public listCustomers(): Observable<ICustomer[]> {
        return this.httpService.get<ICustomer[]>(`${environment.api}/customers`)
    }
}