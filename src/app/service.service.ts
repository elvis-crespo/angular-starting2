import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  brother1 = '';
  brother2 = '';

  getBrother1() {
    return this.brother1 || 'No hay hermano 1';
  }

  setBrother1(brother: string) {
    this.brother1 = brother;
  }

  getBrother2() {
    return this.brother2 || 'No hay hermano 2';
  }

  setBrother2(brother: string) {
    this.brother2 = brother;
  }

  saludar(brother: string) {
    console.log('Hola ' + brother);
  }
  
  saludar2(brother: string) {
    console.log('Adios ' + brother);
  }

}
