import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  photo: string;
  name: string;
  products: Array<Product>;
  @Input() cartProducts: Array<Product> = [];
  @Output() itemEmitter = new EventEmitter<Array<Product>>();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() { 
    this.productService.findAll().subscribe( data => {this.products = data});
    localStorage.setItem('products', null);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart.product) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
  
        if (item && item.product) {
          for (let a=0; a<item.quantity; a++) { 
            this.cartProducts.push(item);
          }
        }
      }
  
    }
  }

  onSelect(photo: string, name: string) {
    this.photo = photo;
    this.name = name;
  }

  addToCart(product: any) {
    this.cartProducts.push(product.id);
    localStorage.setItem('products', this.cartProducts.toString());
    this.itemEmitter.emit(this.cartProducts);
  }
}
