import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NabadyService {
  constructor(@Inject(HttpClient) private http: HttpClient) {
    console.log('NabadyService constructor');
  }
  fetchProducts(selected: string): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${selected ? 'category/'+selected : ''}`);
  }
  getCategory(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
}