import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ajout-fournisseur',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.scss']
})
export class AjoutFournisseurComponent {

  // apiUrl = 'http://192.168.2.24:8000/api';
  // formData: any;

  // constructor(private http: HttpClient) { }

  // onSubmit(formData: any): void {
  //   this.http.post(`${this.apiUrl}/fournisseur/create`, formData)
  //     .subscribe(
  //       response => {
  //         console.log("response:"+response); // Gérer la réponse du serveur
  //       },
  //       error => {
  //         console.log(error); // Gérer les erreurs éventuelles
  //       }
  //     );
  // }
}
