import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponentComponent } from "./main-layout-component/main-layout-component.component";
import { ProduitsComponent } from './components/produits/produits.component';
import { PageService } from './services/page.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
             MainLayoutComponentComponent,
             ProduitsComponent
            ]
})
export class AppComponent {
  title = 'testAngularApp';

  currentPage!: string;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.currentPage$.subscribe(page => {
      this.currentPage = page;
    });
  }
}
