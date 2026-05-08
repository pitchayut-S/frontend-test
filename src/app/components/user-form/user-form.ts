import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  submitted: any = null;

  onSubmit() {
    if (this.userForm.valid) {
      this.submitted = this.userForm.value;
      console.log('Form Submit', this.submitted);
    }
  }
}
