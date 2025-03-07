import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CurrencyPipe, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productsList: IProduct[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
      this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
        this.productsList = data;
      });
  }

}
