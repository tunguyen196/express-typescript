import { Product } from './../Models/Product';

export interface ProductService {
    createProduct(product:Product): Promise<void>;
}