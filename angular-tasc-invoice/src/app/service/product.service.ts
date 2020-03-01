import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../model/product';

@Injectable()
export class ProductService {

    private products: Product[] = [
        { id: 'p01', name: '16lb bag of Skittles', price: 16.00, tax: 0, photo: 'skittles.jpg' },
        { id: 'p02', name: 'Walkman', price: 99.99, tax: 0, photo: 'walkman.jpg' },
        { id: 'p03', name: 'Bag of Microwave Popcorn', price: 0.99, tax: 0, photo: 'popcorn.jpg' },
        { id: 'p04', name: 'Imported bag Vanilla-Hazelnut Coffee', price: 11.00, tax: 0, photo: 'hazzlenut_coffee.jpg' },
        { id: 'p05', name: 'Imported Vespa', price: 15001.25, tax: 0, photo: 'scooter.jpg' },
        { id: 'p06', name: 'Imported crate of Almond Snickers', price: 75.99, tax: 0, photo: 'snicker.png' },
        { id: 'p07', name: 'Discman', price: 55.00, tax: 0, photo: 'discman.jpg' },
        { id: 'p08', name: 'Imported Bottle of Wine', price: 10.00, tax: 0, photo: 'wine.png' },
        { id: 'p09', name: '300lb bag of Fair-Trade Coffee', price: 997.99, tax: 0, photo: 'colombian_coffee.jpg' }
    ];

    constructor() {}

    findAll(): Observable<Product[]> {
        return of(this.products);        
    }

    find(id: string): Observable<Product> {
        return of(this.products[this.getSelectedIndex(id)]);
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;    
    }
}