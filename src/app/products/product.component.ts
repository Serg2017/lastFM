import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'product-app',
    templateUrl: './product.template.html',
    providers: [ProductService],
})

export class ProductComponent implements OnInit {
    /*products = [
        {id: 1, name: 'Name', description: 'DescriptionText', price: 44.50},
        {id: 2, name: 'Name', description: 'DescriptionText', price: 44.50},
        {id: 3, name: 'Name', description: 'DescriptionText', price: 44.50},
        {id: 4, name: 'Name', description: 'DescriptionText', price: 44.50}
    ];*/
    productForm: boolean = false;
    isNewForm: boolean = false;
    products: Product[];
    newProduct: any = {};
    // Construct
    constructor(private productService: ProductService) {}
    // Initialization
    ngOnInit(): void {
        this.products = this.productService.getAllProducts();
    }
    // Edit Product
    showEditProductForm(product: Product) {
        if (!product) {
            this.productForm = false;
            return;
        }
        this.productForm = true;
        this.isNewForm = false;
        this.newProduct = product;
    }
    // Add New Product
    showAddProductForm() {
        if (this.products.length) {
            this.newProduct = {};
        }
        this.productForm = true;
        this.isNewForm = true;
    }
    // Save or Update product
    saveProduct(product: Product) {
        if (this.isNewForm) {
            this.productService.addProduct(product);
            console.log('Add');
        } else {
            this.productService.updateProduct(product);
            console.log('Update');
        }
        this.productForm = false;
    }
    // Remove product
    removeProduct(product: Product) {
        this.productService.deleteProduct(product);
    }
}