import { AppDataSource } from './../../data-source';
import { Product } from './../Models/Product';

class ProductController {
    async index(req, res) {
        const productRepo = AppDataSource.getRepository(Product);
        const porducts = await productRepo.find({
            relations: {
                category: true
            }
        });

        return res.json({code: 200, data: porducts});
    }

    async show(req, res) {
        const productRepo = AppDataSource.getRepository(Product);
        const porduct = await productRepo.findOneBy({id: req.params.id});

        return res.json({code: 200, data: porduct});
    }

    async create(req, res) {
        const product = new Product();
        product.name = req.body.name;
        product.price = req.body.price;
        product.amount = req.body.amount;
        product.category = req.body.category_id;
        
        await AppDataSource.manager.save(product);
        
        return res.json({code: 200, data: product});
    }
    
    async update(req, res) {
        const photoRepo = AppDataSource.getRepository(Product);
        const productUpdate = await photoRepo.findOneBy({id: req.params.id});
        productUpdate.name = req.body.name;
        productUpdate.price = req.body.price;
        productUpdate.amount = req.body.amount;
        productUpdate.category = req.body.category_id;

        await AppDataSource.manager.save(productUpdate);

        return res.json({code: 200, data: productUpdate});
    }

    async destroy(req, res) {
        const photoRepo = AppDataSource.getRepository(Product);
        const productDestroy = await photoRepo.findOneBy({id: req.params.id});
        await AppDataSource.manager.remove(productDestroy);

        return res.json({code: 204, data: {}});
    }
}

const productController = new ProductController();
export default productController