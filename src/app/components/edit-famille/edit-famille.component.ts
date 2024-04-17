import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-famille',
  standalone: true,
  imports: [RouterLink,
            HttpClientModule,
            FormsModule,
            CommonModule
  ],
  templateUrl: './edit-famille.component.html',
  styleUrl: './edit-famille.component.scss'
})
export class EditFamilleComponent implements OnInit{

  familleId: number | undefined;
  famille: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const familleId = params['id'];
      this.familleId = familleId; // Stocke l'ID du client
      this.getFamilleDetails(familleId);
    });
  }

  getFamilleDetails(id: number): void {
    this.http.get<any>('http://192.168.2.5:8000/api/famille/find/' + id).subscribe(
      (response) => {
        this.famille = response;
      },
      (error) => {
        console.error('Error fetching famille details:', error);
      }
    );
  }

  updateFamille(): void {
    // Utilise familleId pour construire l'URL de la requête PUT
    this.http.put(`http://192.168.2.5:8000/api/famille/update/${this.familleId}`, this.famille).subscribe(
      () => {
        this.router.navigate(['/familles']);
        console.log('famille updated successfully');
        // Peut-être rediriger vers une autre page ou afficher un message de confirmation
      },
      (error) => {
        console.error('Error updating famille:', error);
      }
    );
  }



}
