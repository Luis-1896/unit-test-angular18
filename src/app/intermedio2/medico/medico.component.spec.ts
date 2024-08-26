import { TestBed, ComponentFixture } from '@angular/core/testing';


import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';



describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;


    beforeEach( () => {

        TestBed.configureTestingModule({
            imports: [ MedicoComponent ],
            providers: [
              provideHttpClient(),
              provideHttpClientTesting()
            ]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;

    });


    it('Debe de crearse el componente', () => {
        expect( component ).toBeTruthy();
    });

    it('Debe de retornar el nombre del médico', () => {

        const nombre = 'Luis';
        const res = component.saludarMedico( nombre );

        expect( res ).toContain( nombre );

    });

});
