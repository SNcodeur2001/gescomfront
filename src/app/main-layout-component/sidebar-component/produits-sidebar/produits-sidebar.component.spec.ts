import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsSidebarComponent } from './produits-sidebar.component';

describe('ProduitsSidebarComponent', () => {
  let component: ProduitsSidebarComponent;
  let fixture: ComponentFixture<ProduitsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
