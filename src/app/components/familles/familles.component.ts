import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FamilleService } from '../../services/familles/famille.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-familles',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './familles.component.html',
  styleUrl: './familles.component.scss'
})
export class FamillesComponent implements OnInit {


  familles: any[] = [];

  constructor(private familleservice: FamilleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFamille();
  }

  getFamille(): void {
    this.familleservice.getFamille().subscribe(
      (response) => {
        this.familles = response;
      },
      (error) => {
        console.error('Error fetching famille:', error);
      }
    );
  }

  deleteFamille(id: number): void {
    if (confirm('Are you sure you want to delete this famille?')) {
      this.familleservice.deleteFamille(id).subscribe(
        () => {
          this.familles = this.familles.filter(familles => familles.id !== id);
        },
        (error) => {
          console.error('Error deleting famille:', error);
        }
      );
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-famille', id], { relativeTo: this.route });
  }
}

