import { AppDataSource } from './../../data-source';
import { ProductService } from './ProductService';
import { Product } from './../Models/Product';
import { Connection, getRepository, Repository } from 'typeorm';

export class ProductServiceImpl implements ProductService {
    private repo: Repository<Product>;

    constructor() {
        this.repo = AppDataSource.getRepository(Product);
    }

    async createProduct(product: Product): Promise<void> {
        await this.repo.save(product);
    }
}