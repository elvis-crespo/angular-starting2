import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { PipePipe } from '../pipe.pipe';

@Component({
  selector: 'app-brother',
  imports: [PipePipe],
  templateUrl: './brother.component.html',
  styleUrl: './brother.component.css',
})
export class BrotherComponent implements OnInit {
  nombre = '';
  // constructor(private _service: ServiceService) {}

  private _service2 = inject(ServiceService);

  ngOnInit(): void {
    this._service2.setBrother1('Hermano 1');
    this.nombre = this._service2.getBrother1();
  }
  saludar() {
    this._service2.saludar(this._service2.getBrother2() || 'No hay hermano 1');
  }
  preguntar() {
    console.log(this._service2.preguntar());
  }
}
