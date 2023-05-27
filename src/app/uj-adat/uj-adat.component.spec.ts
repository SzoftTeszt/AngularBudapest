import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjAdatComponent } from './uj-adat.component';

describe('UjAdatComponent', () => {
  let component: UjAdatComponent;
  let fixture: ComponentFixture<UjAdatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjAdatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjAdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
