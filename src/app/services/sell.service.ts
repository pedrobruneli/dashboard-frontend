import { Injectable } from "@angular/core";
import { IProduct, ISellProduct } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SellService {

    constructor(private readonly httpClient: HttpClient){}

    public sellProducts(products: ISellProduct[], customerId: string) {
        return this.httpClient.post(`${environment.api}/sell`, {
            products: products.map((product) => ({productId: product.id, quantity: product.quantity})),
            customerId
        })
    }
}