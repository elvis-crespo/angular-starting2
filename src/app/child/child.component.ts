import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  counter = 0;
  @Input() dataChild= "";

  @Output() sendData = new EventEmitter<string>();
  @Output() incrementFromChild = new EventEmitter<void>();
  @Output() decrementFromChild = new EventEmitter<void>();

  message: string = '';

  SendDataToFather() {
    this.sendData.emit(this.message);
  }

  increment() {
    this.incrementFromChild.emit();
  }

  decrement() {
    this.decrementFromChild.emit();
  }
}
