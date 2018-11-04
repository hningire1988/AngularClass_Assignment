import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
//import {Observable} from 'rxjs';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title : string =  'Products';
    filterText:string ="";
    showFilterTextBox:boolean=false;
    products : IProduct[];
    selectedProduct: IProduct;
    selectedRow : Number;
    setClickedRow : Function;

    constructor(private _productService: ProductService) { 
        this.setClickedRow = function(index){
            this.selectedRow = index;            
        }
    }
        ngOnInit():void{
        this._productService.getProduct()
                            .subscribe((prds :IProduct[]) => {
                                this.products = prds;
                                this.onSelect(this.products[0]);
                            });
        
    }

    showFilter():void {
        this.showFilterTextBox = !this.showFilterTextBox;
    };

    onSelect(product: IProduct): void {        
        this.selectedProduct = product;       
      }  
    
}
