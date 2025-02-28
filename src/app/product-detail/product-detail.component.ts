import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  productList: Product[] = productsList;
  loading = true;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
        // this.product = params['productId'];
        this.product = this.productList.find(product => product.id == params['productId']);
        this.loading = false;
      });
    }, 2000);
  }
}
