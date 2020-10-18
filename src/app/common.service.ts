import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/store/product.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ErrorHandlingService } from './error-handling.service';
import { retry, catchError } from 'rxjs/operators';

export class Book {
  'id': string;
  'name': string;
  'display_name': string;
  'author': string;
  'price': string;
  'description': string;
  'img_path': string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService,
  ) { }

  createLink(product): Observable<Product> {
    const url = this.baseurl + 'products/';
    return this.http.post<Product>(url, product)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  getLink(): Observable<Product[]> {
    const url = this.baseurl + 'products/';
    return this.http.get<Product[]>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  getLinkError(): Observable<Product[]> {
    const url = this.baseurl + 'productss/';
    return this.http.get<Product[]>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  getLinkData(id): Observable<Product> {
    const url = this.baseurl + 'products/' + id;
    return this.http.get<Product>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  updateLink(id: string | number, data: Partial<Product>): Observable<Product> {
    const url = this.baseurl + 'products/' + id;
    return this.http.put<Product>(url, data)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }

  deleteLink(id): any {
    const url = this.baseurl + 'products/' + id;
    return this.http.delete(url)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }


  // *************Books*******************
  createBook(product): Observable<Book> {
    const url = this.baseurl + 'books/';
    return this.http.post<Book>(url, product)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  getBooks(): Observable<Book[]>{
    const url = this.baseurl + 'books/';
    return this.http.get<Book[]>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  getBookData(id): Observable<Book> {
    const url = this.baseurl + 'books/' + id;
    return this.http.get<Book>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  updateBook(id: string | number, data): Observable<Book> {
    const url = this.baseurl + 'books/' + id;
    return this.http.put<Book>(url, data)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }

  deleteBook(id): any{
    const url = this.baseurl + 'books/' + id;
    return this.http.delete(url).pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
}
