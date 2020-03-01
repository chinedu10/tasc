import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { PrintService } from '../../service/print.service';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { Item } from '../../model/item';


@Component({  
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {

	private items: Item[] = [];
	private total: number = 0;
	private tax: number = 0;
	private products: Array<Product>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService,
		private printService: PrintService
	) { }

	ngOnInit() {
		this.products = [];
		let str = localStorage.getItem("products");
		let productList = str.split(',');

		productList.forEach( p => {
			this.productService.find(p).subscribe(data => {
				if (data) {
					this.products.push(data);
				}
			});
		});
		
		this.products.forEach(product => {
			let item: Item = {
          		product: product,
				quantity: 1
			};
			
			if (localStorage.getItem('cart') == null) {
				let cart: any = [];
				cart.push(JSON.stringify(item));
				localStorage.setItem('cart', JSON.stringify(cart));
			} else {
				let cart: any = JSON.parse(localStorage.getItem('cart'));
				let index: number = -1;
				if (cart) {
					for (let i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item && item.product && item.product.id == product.id) {
							index = i;
							break;
						}
					}	
				}
				if (index == -1) {
					if (!cart) cart = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} 
				else {
					let item: Item = JSON.parse(cart[index]);
					item.quantity += 1;
					cart[index] = JSON.stringify(item);
					localStorage.setItem("cart", JSON.stringify(cart));
				}
			}
			this.loadCart();
		});

		if (this.products.length === 0) this.loadCart();
	}

	loadCart(): void {
		this.total = 0;
		this.tax = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);

			if (item.product) {
				// 5% import tax
				if (item.product.id === 'p04' || item.product.id === 'p05' || item.product.id === 'p06' || item.product.id === 'p08'){
					this.tax += item.product.price * .05;
					item.product.tax += item.product.price * .05;
				}
					
				// 10% sales tax except for food
				if (item.product.id === 'p01' || item.product.id === 'p03' || item.product.id === 'p04' || item.product.id === 'p06' || item.product.id === 'p09'){
					this.tax += 0;
					item.product.tax += 0;
				}
				else {
					this.tax += item.product.price * .10;
					item.product.tax += item.product.price * .10;
				}

				this.items.push({
					product: item.product,
					quantity: item.quantity
				});

				this.total += (item.product.price + item.product.tax) * item.quantity;
			}
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item && item.product && item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

	checkout() {
		let cart: any = JSON.parse(localStorage.getItem('cart'));

		const cartObservable: Observable<Array<Item>> = of(cart);
		cartObservable.subscribe(data => {
		  this.printService.onDataReady(cart);
		});
	}

}