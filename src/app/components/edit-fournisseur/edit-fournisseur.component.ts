import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


// interface Fournisseur {
//   compte_tiers: string;
//   intitule: string;
//   adresse: string;
//   complement: string;
//   region: string;
//   ville: string;
//   pays: string;
//   telephone: string;
//   email: string;
//   code_postal: string;
//   ninea: string;
// }

@Component({
  selector: 'app-edit-fournisseur',
  standalone: true,
  imports: [
          CommonModule,
          HttpClientModule,
          FormsModule
  ],
  templateUrl: './edit-fournisseur.component.html',
  styleUrl: './edit-fournisseur.component.scss'
})
export class EditFournisseurComponent implements OnInit{


  fournisseurId: number | undefined;
  fournisseur: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const fournisseurId = params['id'];
      this.fournisseurId = fournisseurId; // Stocke l'ID du fournisseur
      this.getFournisseurDetails(fournisseurId);
    });
  }

  getFournisseurDetails(id: number): void {
    this.http.get<any>('http://192.168.2.5:8000/api/fournisseur/find/' + id).subscribe(
      (response) => {
        this.fournisseur = response;
      },
      (error) => {
        console.error('Error fetching fournisseur details:', error);
      }
    );
  }

  updateFournisseur(): void {
    // Utilise fournisseurId pour construire l'URL de la requête PUT
    this.http.put(`http://192.168.2.5:8000/api/fournisseur/update/${this.fournisseurId}`, this.fournisseur).subscribe(
      () => {
        this.router.navigate(['/fournisseurs']);
        console.log('Fournisseur updated successfully');
        // Peut-être rediriger vers une autre page ou afficher un message de confirmation
      },
      (error) => {
        console.error('Error updating fournisseur:', error);
      }
    );
  }

















































































































  // fournisseurId :number | undefined;
  // fournisseur :any={};


  // fournisseur: Fournisseur = {
  //   compte_tiers: '',
  //   intitule: '',
  //   adresse: '',
  //   complement: '',
  //   region: '',
  //   ville: '',
  //   pays: '',
  //   telephone: '',
  //   email: '',
  //   code_postal: '',
  //   ninea: ''
  // };



  // constructor(private route: ActivatedRoute,
  //             private http: HttpClient,
  //             private router: Router,
  //             private fournisseurService:FournisseurService,

  // ) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const fournisseurId = params['id'];
  //     console.log(fournisseurId);

      // if (fournisseurId) {
      //   this.getFournisseurDetails(fournisseurId);
      // } else {
      //   console.error('ID du fournisseur non trouvé.');
      // }
  //   });
  // }

  // getFournisseurDetails(id: string): void {
  //   this.http.get<Fournisseur>('http://192.168.2.5:8000/api/fournisseur/find/' + id).subscribe(
  //     (response) => {
  //       this.fournisseur = response;
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des détails du fournisseur :', error);
  //       // Ajoutez ici une notification à l'utilisateur ou redirigez vers une page d'erreur
  //     }
  //   );
  // }


//   onSubmit() {
//     const fournisseurId = this.fournisseur.id;
//     console.log(fournisseurId);

//     this.fournisseurService.updateFournisseur(fournisseurId, this.fournisseur).subscribe(
//       (response) => {
//         console.log('Fournisseur modifié avec succès', response);
//         // Redirection vers la route '/fournisseurs' après la modification réussie
//         this.router.navigate(['/fournisseurs']);
//       },
//       (error) => {
//         console.error('Erreur lors de la modification du fournisseur', error);
//       }
//     );
//   }


//
}
