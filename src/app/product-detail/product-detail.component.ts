import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct;
  productList: IProduct[] = [];
  loading = true;
  colour = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.colour = (this.product?.price as number) > 5 ? 'red' : 'gray';
            this.loading = false;
          },
          error: (error) => {
            console.log(error);
            this.loading = false;
          },
        });
      },
    });
  }
}
