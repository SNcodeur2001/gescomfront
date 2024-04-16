import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable} from 'rxjs';
import { ClientService } from '../../services/clients/client.service';


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit{

  clients: any[] = [];

  constructor(private clientervice: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    this.clientervice.getClient().subscribe(
      (response) => {
        this.clients = response;
      },
      (error) => {
        console.error('Error fetching client:', error);
      }
    );
  }

  deleteClient(id: number): void {
    if (confirm('Are you sure you want to delete this Client?')) {
      this.clientervice.deleteClient(id).subscribe(
        () => {
          this.clients = this.clients.filter(clients => clients.id !== id);
        },
        (error) => {
          console.error('Error deleting client:', error);
        }
      );
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-client', id], { relativeTo: this.route });
  }



}
