import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IListItem } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient) { }

  getList(url:string): Observable<IListItem[]> {
    const baseApi = 'https://staging.pearpartner.com/';
    const requestUrl = baseApi + url ;
        // `${baseApi}order/9999`;

    return this._httpClient.get<IListItem[]>(requestUrl);
  }

}
