import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientService } from '../../services/clients/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajout-client',
  standalone: true,
  imports: [RouterLink,
            HttpClientModule,
            FormsModule,
            CommonModule
  ],
  templateUrl: './ajout-client.component.html',
  styleUrl: './ajout-client.component.scss'
})
export class AjoutClientComponent {

  constructor(private http: HttpClient,
    private clientService: ClientService,
    private router: Router) { }

ngOnInit(): void {
}

onSubmit(formData: any) {
this.clientService.createClient(formData).subscribe(
(response) => {
console.log('client créé avec succès', response);
this.router.navigate(['/clients']);
},
(error) => {
console.error('Erreur lors de la création du client', error);
// Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
}
);
}


}
