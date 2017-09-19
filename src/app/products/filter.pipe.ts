import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    transform(products: any, tern: any): any {
        if (tern === undefined) {
            return products;
        }
        return products.filter(function(products) {
            return products.name.toLowerCase().includes(tern.toLowerCase());
        });
    }
}