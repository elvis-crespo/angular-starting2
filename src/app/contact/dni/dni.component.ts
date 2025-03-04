import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dni',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css',
})
export class DniComponent implements OnChanges {
  @Input() typeDni = 'DNI';
  formDoc: FormGroup;

  newVar = 'DNI';

  constructor(private form: FormBuilder) {
    this.formDoc = this.form.group({
      dni: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.newVar = (changes?.['typeDni'].firstChange) ? 'DNI' : changes?.['typeDni'].currentValue;
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formDoc.get(controlName)?.hasError(errorType) &&
      this.formDoc.get(controlName)?.touched
    );
  }
}
