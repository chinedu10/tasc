import { Component, Input } from '@angular/core';
import { PrintService } from './service/print.service';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TASC INVOICE';
  @Input() products: Array<Product> = [];

  constructor(public printService: PrintService) { }

  numOfProductsInCart(products: Array<Product>) {
console.log('products ',  products);    
    this.products = products;
  }

  onPrintInvoice() {
    const invoiceIds = ['A101', 'A102'];
    this.printService.printInvoice('invoice', invoiceIds);
  }
}
