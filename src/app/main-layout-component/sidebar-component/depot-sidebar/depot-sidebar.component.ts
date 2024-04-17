import { Component } from '@angular/core';
import { DepotService } from '../../../services/depot/depot.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depot-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './depot-sidebar.component.html',
  styleUrl: './depot-sidebar.component.scss'
})
export class DepotSidebarComponent {


  depots: any[] = [];

  constructor(private depotservice: DepotService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepot();
  }

  getDepot(): void {
    this.depotservice.getDepot().subscribe(
      (response) => {
        this.depots = response;
      },
      (error) => {
        console.error('Error fetching depot:', error);
      }
    );
  }

  deleteDepot(id: number): void {
    if (confirm('Are you sure you want to delete this depot?')) {
      this.depotservice.deleteDepot(id).subscribe(
        () => {
          this.depots = this.depots.filter(depots => depots.id !== id);
        },
        (error) => {
          console.error('Error deleting depot:', error);
        }
      );
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-depot', id], { relativeTo: this.route });
  }
}
