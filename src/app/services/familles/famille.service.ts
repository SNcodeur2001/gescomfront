import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  private apiUrl = 'http://192.168.2.5:8000/api/famille';

  constructor(private http: HttpClient) { }

  createFamille(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }

  getFamille(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  deleteFamille(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
