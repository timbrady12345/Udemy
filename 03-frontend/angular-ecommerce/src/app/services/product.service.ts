import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategoryComponent } from '../common/product-category/product-category.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.luv2shopApiUrl + '/products'; //?size=100

  private categoryUrl = environment.luv2shopApiUrl + '/product-category';

  constructor(private httpClient: HttpClient) {}

  getProduct(theProductId: number): Observable<Product> {
    //need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number
  ): Observable<GetResponseProducts> {
    //build URL based on cat id
    const searchUrl =
      `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}` +
      `&page=${thePage}&size=${thePageSize}`;

      console.log(`Getting products from - ${searchUrl}`);

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {
    //build URL based on cat id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  getProductCategories(): Observable<ProductCategoryComponent[]> {
    return this.httpClient
      .get<GetResponseProductCategory>(this.categoryUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    theKeyword: string): Observable<GetResponseProducts> {
    //build URL based on keyword, page, and size
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategoryComponent[];
  };
}
