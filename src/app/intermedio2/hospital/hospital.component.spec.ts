import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach((() => {
    // TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
    // .compileComponents();
  }));

  beforeEach(async() => {

   await TestBed.configureTestingModule({
      imports: [ HospitalComponent ]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de crear un HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
