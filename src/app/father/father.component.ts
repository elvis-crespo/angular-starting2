import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { StyleDirective } from '../style.directive';
import { PipePipe } from '../pipe.pipe';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrl: './father.component.css',
  imports: [StyleDirective, PipePipe, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe],
})
export class FatherComponent implements OnInit {

  constructor( private _serice: ServiceService) { }

  nombre = '';
  date = new Date();
  dollar = 1000;
  pi = Math.PI;
  factorial = 0.5;

  ngOnInit(): void {
    this._serice.setBrother2('Hermano 2');
    this.nombre = this._serice.getBrother2();
  }
  saludar() {
    this._serice.saludar(this._serice.getBrother1() || 'No hay hermano 1');
  }

  preguntar() {
    console.log(this._serice.preguntar());
  }

  counter = 0;
  dataChild = "Data from father component to child component";
  receivedData = "";

  receivedDataFromChild($event: string) {
    this.receivedData = $event;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter === 0) {
      return;
    }
    this.counter--;
  }
}
