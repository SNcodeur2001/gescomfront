import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-top-navbar-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-navbar-component.component.html',
  styleUrl: './top-navbar-component.component.scss'
})
export class TopNavbarComponentComponent {
  constructor(private menuService: MenuService) { }

  onMenuClick(menu: string) {
    this.menuService.setSelectedMenu(menu);
  }
}
