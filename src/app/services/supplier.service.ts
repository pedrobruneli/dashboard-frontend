import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ISupplier } from "../models/supplier.model";

@Injectable({
    providedIn: 'root'
})
export class SupplierService {
    constructor(private readonly httpService: HttpClient) { }

    public createSupplier(supplier: ISupplier): Observable<ISupplier> {
        return this.httpService.post<ISupplier>(`${environment.api}/suppliers`, supplier)
    }

    public getSuppliers(): Observable<ISupplier[]> {
        return this.httpService.get<ISupplier[]>(`${environment.api}/suppliers`)
    }
}