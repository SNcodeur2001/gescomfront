import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fournisseurs',
  standalone: true,
  imports: [RouterLink,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrl: './fournisseurs.component.scss'
})
export class FournisseursComponent {

  fournisseurs:any[]=[];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getFournisseur();
  }

  getFournisseur(): void {
    this.http.get<any[]>('http://192.168.2.22:8000/api/fournisseur/read').subscribe(
      (response) => {
        this.fournisseurs = response;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
}
