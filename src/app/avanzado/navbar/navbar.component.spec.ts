import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import {
  RouterTestingHarness,
  RouterTestingModule,
} from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('No Debe de tener un link /hospital a la pagina de medicos', async () => {
    const elementos = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );

    let existe = false;
    for (const elem of elementos) {
      if (elem.attributes['routerLink'] === '/hospital') {
        existe = true;
        break;
      }
    }
    expect(existe).toBeFalsy();
  });
});
