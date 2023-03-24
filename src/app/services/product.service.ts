import { Product } from "../model/product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? "msg-error" : "msg-success",
    });
  }
  create(product: Product): Observable<Product> {
    const action = "criar produto";
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e, action))
    );
  }

  update(product: Product): Observable<Product> {
    const url = this.baseUrl + `/${product.id}`;
    const action = "editar produto";
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e, action))
    );
  }

  delete(id: number): Observable<Product> {
    const url = this.baseUrl + `/${id}`;
    const action = "deletar produto";
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e, action))
    );
  }

  read(): Observable<Product[]> {
    const action = "carregar produtos";
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e, action))
    );
  }

  readById(id: number): Observable<Product> {
    const url = this.baseUrl + `/${id}`;
    const action = "carregar produto";
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e, action))
    );
  }
  
  errorHandler(e: any, action: string): Observable<any> {
    this.showMessage(`Ocorreu um erro ao ${action}!`, true);
    return EMPTY;
  }
}
