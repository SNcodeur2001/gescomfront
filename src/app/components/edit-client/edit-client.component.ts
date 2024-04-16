import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [RouterLink,
          HttpClientModule,
          FormsModule,
          CommonModule
  ],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})
export class EditClientComponent implements OnInit{

  clientId: number | undefined;
  client: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const clientId = params['id'];
      this.clientId = clientId; // Stocke l'ID du client
      this.getClientDetails(clientId);
    });
  }

  getClientDetails(id: number): void {
    this.http.get<any>('http://192.168.2.5:8000/api/client/find/' + id).subscribe(
      (response) => {
        this.client = response;
      },
      (error) => {
        console.error('Error fetching client details:', error);
      }
    );
  }

  updateClient(): void {
    // Utilise clientId pour construire l'URL de la requête PUT
    this.http.put(`http://192.168.2.5:8000/api/client/update/${this.clientId}`, this.client).subscribe(
      () => {
        this.router.navigate(['/clients']);
        console.log('client updated successfully');
        // Peut-être rediriger vers une autre page ou afficher un message de confirmation
      },
      (error) => {
        console.error('Error updating client:', error);
      }
    );
  }



}
