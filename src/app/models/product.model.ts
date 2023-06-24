export interface IProduct {
    id: string
    name:         string
    cost_price:   number
    sale_price:   number
    description:  string
    code:         string
    qnt_in_stock: number
}

export interface ISellProduct extends IProduct {
    quantity: number
}

export interface ISellProductRequest {
    productId: string
    quantity: number
}