import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  standalone: true,
  imports: [],
  templateUrl: './router-medico.component.html',
  styleUrl: './router-medico.component.css',
})
export class RouterMedicoComponent implements OnInit {
  id!: string;

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }
}
