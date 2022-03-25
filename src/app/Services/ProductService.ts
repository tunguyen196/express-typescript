import { Product } from './../Models/Product';
import { AppDataSource } from '../../config/data-source';
import { Service } from "typedi";
import { DeleteResult, Long, Repository, UpdateResult } from 'typeorm';

@Service()
export default class ProductService {
    async getAllProduct(): Promise<any> {
        const productRepo: Repository<Product> = AppDataSource.getRepository(Product)

        const products: Product[] = await productRepo.find({
            relations: {
                category: true
            }
        }); 

        return products;
    }

    async getInfoProduct(id: number): Promise<Product>{
        const productRepo: Repository<Product> = AppDataSource.getRepository(Product);
        const product: Product = await productRepo.findOneBy({id: id});

        return product;
    }

    async createProduct(product: Product): Promise<Product>{
        return await AppDataSource.manager.save(product);
    }

    async updateProduct(productUpdate: any, id: number): Promise<UpdateResult>{
        const productRepo = AppDataSource.getRepository(Product);
        const product: UpdateResult = await productRepo.update(id, productUpdate);

        return product;
    }

    async deleteProduct(id: number): Promise<DeleteResult> {
         const productRepo: Repository<Product> = AppDataSource.getRepository(Product);
         const product: DeleteResult = await productRepo.delete(id);

         return product;
    }
}