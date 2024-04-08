import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotSidebarComponent } from './depot-sidebar.component';

describe('DepotSidebarComponent', () => {
  let component: DepotSidebarComponent;
  let fixture: ComponentFixture<DepotSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepotSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
