import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireFamilleComponent } from './formulaire-famille.component';

describe('FormulaireFamilleComponent', () => {
  let component: FormulaireFamilleComponent;
  let fixture: ComponentFixture<FormulaireFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireFamilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
