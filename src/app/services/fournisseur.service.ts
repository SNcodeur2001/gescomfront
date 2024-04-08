import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFournisseur(): Observable<any> {
    return this.http.get<any>('http://192.168.2.22:8000/api/fournisseur/read');
  }
}
