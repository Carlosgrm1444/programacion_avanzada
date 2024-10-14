import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examen2Component } from './examen2.component';

describe('Examen2Component', () => {
  let component: Examen2Component;
  let fixture: ComponentFixture<Examen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Examen2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Examen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
