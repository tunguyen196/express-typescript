import { Product } from './../Models/Product';
import { AppDataSource } from './../../data-source';
import { Service } from "typedi";
import { Long } from 'typeorm';

@Service()
export default class ProductService {
    async getAllProduct(): Promise<any> {
        const productRepo = AppDataSource.getRepository(Product)

        const products: Array<Product> = await productRepo.find({
            relations: {
                category: true
            }
        }); 

        return products;
    }

    async getInfoProduct(id: number): Promise<Product>{
        const productRepo = AppDataSource.getRepository(Product);
        const product: Product = await productRepo.findOneBy({id: id});

        return product;
    }

    async createProduct(product: Product): Promise<Product>{
        return await AppDataSource.manager.save(product);
    }
}