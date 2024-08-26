import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';

//esto es para hacer el llamado solo a algunos metodos de librerias externas y no utilizar todos los metodos
class FakeRouter {
  navigate(params: Array<string>) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;

  private subject = new Subject();

  push(valor: { id: string }) {
    this.subject.next(valor);
  }
  get params(): Observable<any> {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id=nuevo', () => {
    component = fixture.componentInstance;
    const activatedRoute = TestBed.inject(ActivatedRoute);
    (<FakeActivatedRoute>(<any>activatedRoute)).push({ id: 'nuevo' });
    expect(component.id).toBe('nuevo');
  });
});
