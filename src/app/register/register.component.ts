import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUser: FormGroup;
  constructor(private fb: FormBuilder) {}
  matchingPasswordsField(form: FormGroup) {
    return form.controls['password'].value ===
      form.controls['confirmPassword'].value
      ? null
      : { mismatch: true };
  }
  ngOnInit(): void {
    this.registerUser = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        userName: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^\\S*$'),
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
          ),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
        addressForm: this.fb.array([]),
      },
      {
        validators: this.matchingPasswordsField,
      }
    );
  }

  get registerFormControl() {
    return this.registerUser.controls;
  }
  addProduct(): void {
    let addressForm = this.registerUser.get('addressForm') as FormArray;
    addressForm.push(
      this.fb.group({
        address: [
          '',
          [
            Validators.required,
            Validators.pattern('^[A-Za-z][A-Za-z0-9\\.-]*_?[A-Za-z0-9\\.-]*'),
          ],
        ],
        street: [
          '',
          [
            Validators.required,
            Validators.pattern('^[A-Za-z][A-Za-z0-9\\.-]*_?[A-Za-z0-9\\.-]*'),
          ],
        ],
        country: ['', [Validators.required, Validators.pattern('^([^0-9]*)$')]],
        city: ['', [Validators.required, Validators.pattern('^([^0-9]*)$')]],
      })
    );
  }
  registerFormSubmit(value: any) {
    if (value.valid) {
      alert('hi there thank you ya ahmed');
    }
  }
}
