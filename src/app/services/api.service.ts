import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(sort?: string): Observable<IProduct[]> {
    const params = sort ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.BASE_URL}${params}`);	
  }

  public getProductById(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.BASE_URL}/${id}`);
  }

  public getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>(`${this.BASE_URL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.BASE_URL}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.BASE_URL}/${id}`, product);
  } 

  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.BASE_URL}/${id}`);
  }
}