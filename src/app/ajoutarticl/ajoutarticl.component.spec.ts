import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutarticlComponent } from './ajoutarticl.component';

describe('AjoutarticlComponent', () => {
  let component: AjoutarticlComponent;
  let fixture: ComponentFixture<AjoutarticlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutarticlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutarticlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
