import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/client/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string = 'http://192.168.2.5:8000/api/client';

  client: Client = {
    compte_tiers: '',
    intitule: '',
    adresse: '',
    complement: '',
    region: '',
    ville: '',
    pays: '',
    telephone: '',
    email: '',
    code_postal: '',
    ninea: ''
  };

  constructor(private http: HttpClient) {}

  getClient(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateClient(clientId: number, client: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${clientId}`, client);
  }

  createClient(data: any) {
    return this.http.post('http://192.168.2.5:8000/api/client/create', data);
  }

}
