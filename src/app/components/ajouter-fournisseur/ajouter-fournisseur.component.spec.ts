import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFournisseurComponent } from './ajouter-fournisseur.component';

describe('AjouterFournisseurComponent', () => {
  let component: AjouterFournisseurComponent;
  let fixture: ComponentFixture<AjouterFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
