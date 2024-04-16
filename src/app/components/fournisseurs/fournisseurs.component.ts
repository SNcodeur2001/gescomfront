import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FournisseurService } from '../../services/fournisseurs/fournisseur.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-fournisseurs',
  standalone:true,
  imports:[
    CommonModule,
    RouterLink
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit {

  fournisseurs: any[] = [];

  constructor(private fournisseurService: FournisseurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFournisseur();
  }

  getFournisseur(): void {
    this.fournisseurService.getFournisseur().subscribe(
      (response) => {
        this.fournisseurs = response;
      },
      (error) => {
        console.error('Error fetching fournisseurs:', error);
      }
    );
  }

  deleteFournisseur(id: number): void {
    if (confirm('Are you sure you want to delete this Founisseur?')) {
      this.fournisseurService.deleteFournisseur(id).subscribe(
        () => {
          this.fournisseurs = this.fournisseurs.filter(fournisseur => fournisseur.id !== id);
        },
        (error) => {
          console.error('Error deleting Fournisseur:', error);
        }
      );
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-fournisseurs', id], { relativeTo: this.route });
  }
}
