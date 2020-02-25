import { Component } from '@angular/core';
import { PrintService } from './service/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TASC INVOICE';

  constructor(public printService: PrintService) { }

  onPrintInvoice() {
    const invoiceIds = ['A101', 'A102', 'A103', 'A104', 'A105'];
    this.printService.printDocument('invoice', invoiceIds);
  }
}
