import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private selectedMenuSubject = new BehaviorSubject<string>('home');
  selectedMenu$ = this.selectedMenuSubject.asObservable();

  constructor() {
    // Récupérer le menu sélectionné depuis le stockage local lors de l'initialisation du service
    const savedMenu = localStorage.getItem('selectedMenu');
    if (savedMenu) {
      this.selectedMenuSubject.next(savedMenu);
    }
  }

  setSelectedMenu(menu: string) {
    // Enregistrer le menu sélectionné dans le stockage local
    localStorage.setItem('selectedMenu', menu);
    this.selectedMenuSubject.next(menu);
  }
}
