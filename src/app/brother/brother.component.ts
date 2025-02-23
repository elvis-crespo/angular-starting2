import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-brother',
  imports: [],
  templateUrl: './brother.component.html',
  styleUrl: './brother.component.css'
})
export class BrotherComponent {
    constructor( private _serice: ServiceService) { }
}
