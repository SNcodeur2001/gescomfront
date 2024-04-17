import { Component } from '@angular/core';
import { FamilleService } from '../../../services/familles/famille.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulaire-famille',
  standalone: true,
  imports: [FormsModule,
            CommonModule
  ],
  templateUrl: './formulaire-famille.component.html',
  styleUrl: './formulaire-famille.component.scss'
})
export class FormulaireFamilleComponent {
  familleData = {
    code: '',
    intitule: '',
    unite_de_vente: '',
    suivi_stock: ''
  };

  constructor(private familleService: FamilleService) { }

  onSubmit(): void {
    this.familleService.createFamille(this.familleData)
      .subscribe(
        response => {
          console.log('Famille créée avec succès :', response);
          // Réinitialiser les données du formulaire après la création réussie
          this.resetForm();
        },
        error => {
          console.error('Erreur lors de la création de la famille :', error);
        }
      );
  }

  resetForm(): void {
    this.familleData = {
      code: '',
      intitule: '',
      unite_de_vente: '',
      suivi_stock: ''
    };
  }
}
