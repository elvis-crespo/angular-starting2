import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DniComponent } from "./dni/dni.component";

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DniComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;
  typeDni = 'DNI';
  showDni = false;
  // userActive = "Magdiel";
  // allForm = {
  //   name: 'Magdiel',
  //   lastName: 'Hernandez',
  //   dni: '12345678',
  //   email: ''
  // }

  constructor(private form: FormBuilder) {
    this.formContact = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      typeDni: ['', [Validators.required]],
      // dni: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    const typeDniMap: { [key: string]: string } = {
      'id-card': 'ID Card',
      pasaport: 'Pasaport',
      license: 'License',
    };
    // const nameControl = this.formContact.get('name');
    // nameControl?.setValue(this.userActive);
    // nameControl?.disable();

    // this.formContact.patchValue({
    //   name: this.userActive.name,
    //   lastName: this.userActive.lastName,
    //   dni: this.userActive.dni,
    //   email: this.userActive.email
    // });

    // // Deshabilitar los campos que no quieres que el usuario edite
    // this.formContact.get('name')?.disable();

    //Clear validators
    // this.formContact.get('name')?.clearValidators();
    // this.formContact.get('name')?.updateValueAndValidity();

    // this.formContact.setValue(this.allForm);
    // this.formContact.get('name')?.disable();
    // this.formContact.get('lastName')?.disable();
    // this.formContact.get('dni')?.disable();

    //subscribe to changes in the form
    // this.formContact.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
    //show data in console

    //type of dni
    this.formContact.get('typeDni')?.valueChanges.subscribe((values) => {
      this.typeDni = typeDniMap[values] || values;
      this.showDni = values !== '';
      // console.log(this.typeDni);
    });
  }

  ngOnDestory(): void {
    // console.log('Component destroyed');
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formContact.get(controlName)?.hasError(errorType) &&
      this.formContact.get(controlName)?.touched
    );
  }

  send() {
    console.log(this.formContact.value);
  }
}
