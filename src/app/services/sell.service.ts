import { Injectable } from "@angular/core";
import { IProduct, SellProduct } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SellService {

    constructor(private readonly httpClient: HttpClient){}

    public sellProducts(products: SellProduct[], customerId: string) {
        return this.httpClient.post(`${environment.api}/sell`, {
            products,
            customerId
        })
    }
}