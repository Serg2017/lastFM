import {Injectable} from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProductService {
    products: Product[] = [
        {id: 1, name: 'TestName_1', description: 'TestDescription', price: 9999999999},
        {id: 1, name: 'TestName_2', description: 'TestDescription', price: 9999999999},
        {id: 1, name: 'TestName_3', description: 'TestDescription', price: 9999999999},
        {id: 1, name: 'TestName_4', description: 'TestDescription', price: 9999999999},
    ];
    // Get all Products
    getAllProducts(): Product[] {
       return this.products;
    }
    // add new Product
    addProduct(product: Product) {
        this.products.push(product);
        console.log('Add New Product');
    }
    // Update product
    updateProduct(product: Product) {
        this.products[product.id] = product;
    }
    // Delete product
    deleteProduct(product: Product) {
        this.products.splice(this.products.indexOf(product), 1);
        console.log('delete Product!!');
    }
}
