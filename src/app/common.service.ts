import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/store/product.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  createLink(product): Observable<Product> {
    const url = this.baseurl + 'products/'
    return this.http.post<Product>(url, product);
  }
  getLink(): Observable<Product[]> { 
    const url = this.baseurl + 'products/'
    return this.http.get<Product[]>(url);
  }
  getLinkData(id): Observable<Product> { 
    const url = this.baseurl + 'products/' + id;
    return this.http.get<Product>(url)
  }
  updateLink(id: string | number, data: Partial<Product>): Observable<Product> {
    const url = this.baseurl + 'products/' + id;
    return this.http.put<Product>(url, data)
  }

  deleteLink(id) {
    const url = this.baseurl + 'products/' + id;
    return this.http.delete(url)
  }


  // *************Books*******************
  createBook(product) {
    const url = this.baseurl + 'books/'
    return this.http.post(url, product);
  }
  getBooks() { 
    const url = this.baseurl + 'books/'
    return this.http.get(url);
  }
  getBookData(id) { 
    const url = this.baseurl + 'books/' + id;
    return this.http.get(url)
  }
  updateBook(id: string | number, data) {
    const url = this.baseurl + 'books/' + id;
    return this.http.put(url, data)
  }

  deleteBook(id) {
    const url = this.baseurl + 'books/' + id;
    return this.http.delete(url)
  }
}
