import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  getMethod(url: string) {
    return this.http.get(this.apiUrl + 'v1/' + url);
  }
}
