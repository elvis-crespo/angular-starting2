import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrl: './father.component.css',
  imports: [ChildComponent],
})
export class FatherComponent implements OnInit {

  constructor( private _serice: ServiceService) { }

  ngOnInit() {
    this._serice.setBrother1('Hermano 1');
    this._serice.setBrother2('Hermano 2');
    this._serice.saludar(this._serice.getBrother1());
    this._serice.saludar2(this._serice.getBrother2());
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
