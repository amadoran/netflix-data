import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatagetterService {
  constructor(private http: HttpClient) {}

  private URL: string =
    'https://netflix-data-bcfb5-default-rtdb.firebaseio.com/collection.json';
  
  getResponse(){
    return this.http.get(this.URL);
  }
}
