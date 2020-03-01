import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})

export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }

  printInvoice(documentName: string, documentData: string[]) {
    this.isPrinting = true;
    this.router.navigate(['/',
      { outlets: {
        'print': ['print', documentName, documentData.join()]
      }}]);
  }

  onDataReady(items: Array<Item>) {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
    });  
  }

  addItem(data: any) {
    if (data) {   
      let node = document.createElement("li");
      let nodecount = document.createTextNode(data.name + ' ');
      let nodeseparator =  document.createTextNode(' : ');
      let nodename = document.createTextNode(data.name);
      let nodevalue = document.createTextNode('$' + data.price);

      node.appendChild(nodecount);
      node.appendChild(nodename);
      node.appendChild(nodeseparator);
      node.appendChild(nodevalue);

      document.getElementById("output").appendChild(node);  
    }
  }
}
