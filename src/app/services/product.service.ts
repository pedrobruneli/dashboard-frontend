import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduct } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private readonly httpService: HttpClient) { }

    public createProduct(product: IProduct, supplierId: string): Observable<IProduct> {
        return this.httpService.post<IProduct>(`${environment.api}/products`, product, { params: { supplierId } })
    }

    public getProducts(search?: string, page?: number): Observable<{ totalPages: number, products: IProduct[] }> {	
        return this.httpService.get<{ totalPages: number, products: IProduct[] }>(`${environment.api}/products`, { params: { page: page ?? 1, limit: 10, search: search ?? '' } })   
    }
}