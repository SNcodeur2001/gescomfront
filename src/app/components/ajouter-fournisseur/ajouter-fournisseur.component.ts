import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FournisseurService } from '../../services/fournisseurs/fournisseur.service';

@Component({
  selector: 'app-ajouter-fournisseur',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrl: './ajouter-fournisseur.component.scss'
})
export class AjouterFournisseurComponent {


  constructor(private http: HttpClient,
              private fournisseurService: FournisseurService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    this.fournisseurService.createFournisseur(formData).subscribe(
      (response) => {
        console.log('Fournisseur créé avec succès', response);
        this.router.navigate(['/fournisseurs']);
      },
      (error) => {
        console.error('Erreur lors de la création du fournisseur', error);
        // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
      }
    );
  }

}
