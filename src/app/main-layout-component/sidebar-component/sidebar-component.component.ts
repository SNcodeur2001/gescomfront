import { Component } from '@angular/core';
import { MainLayoutComponentComponent } from "../main-layout-component.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';





@Component({
    selector: 'app-sidebar-component',
    standalone: true,
    templateUrl: './sidebar-component.component.html',
    styleUrl: './sidebar-component.component.scss',
    imports: [MainLayoutComponentComponent,
              RouterOutlet,
              CommonModule,
              RouterLink

    ],
})
export class SidebarComponentComponent {
  selectedMenu: string | undefined;
  private subscription: Subscription;
currentRoute: any;

  constructor(private menuService: MenuService) {
    this.subscription = this.menuService.selectedMenu$.subscribe(menu => {
      this.selectedMenu = menu;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
