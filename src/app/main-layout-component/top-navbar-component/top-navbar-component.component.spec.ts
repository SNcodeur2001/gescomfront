import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavbarComponentComponent } from './top-navbar-component.component';

describe('TopNavbarComponentComponent', () => {
  let component: TopNavbarComponentComponent;
  let fixture: ComponentFixture<TopNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavbarComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
