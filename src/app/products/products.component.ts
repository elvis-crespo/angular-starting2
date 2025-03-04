import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productsList } from './products.mock';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CurrencyPipe, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsList = productsList;
}
