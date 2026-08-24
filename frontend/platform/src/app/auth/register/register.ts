import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Auth } from '../services/auth';
import Swal from 'sweetalert2';

type RegistrationType = 'Listener' | 'Artist' | null;

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
   @Input() isVisible = true;
   @Output() switchToLogin = new EventEmitter <void>();
     registrationType: RegistrationType = null;
  registerForm: FormGroup;
  selectedProfileImage: File | null = null;

  //  close register form 
closeRegister(): void {
    this.isVisible = false;
  }

  // show login form 
  showLogin(){
    this.switchToLogin.emit();
  }

  constructor(private authService: Auth, private fb: FormBuilder ) {
    this.registerForm = this.fb.group({
      name: ['',Validators.required ],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8) ] ]
    });
  }

  selectRegistrationType(type: 'Listener' | 'Artist' ): void {
    this.registrationType = type;
  }

  changeRegistrationType(): void {
    this.registrationType = null;
    this.registerForm.reset();
    this.selectedProfileImage = null;
  }

  onProfileImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.selectedProfileImage = null;
      return;
    }
    this.selectedProfileImage = input.files[0];
  }


  register(): void {
    if (!this.registrationType) {
      return;
    }

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.value;
    const formData = new FormData();

    formData.append('Name', formValue.name);
    formData.append('Email', formValue.email);
    formData.append('Password', formValue.password );
    formData.append('Role', this.registrationType);
    if (this.selectedProfileImage) {
      formData.append('ProfileImageUrl', this.selectedProfileImage);
  }

  Swal.fire({ 
    title: 'Creating account...', 
    text: 'Please wait while we create your account.', 
    allowOutsideClick: false, 
    allowEscapeKey: false, 
    didOpen: () => { Swal.showLoading(); } 
  });


    // console.log('Registration:', {
    //   name: formValue.name,
    //   email: formValue.email,
    //   role: this.registrationType,
    //   profileImage: this.selectedProfileImage
    // });

   this.authService .register(formData) .subscribe({ 
    next: () => { 
     Swal.fire({ 
      icon: 'success', 
      title: 'Account Created!', 
      text: 'Your MusicFlex account has been created successfully.', 
      confirmButtonText: 'Continue' })
      .then(() => { 
        this.registerForm.reset(); 
        this.registrationType = null; 
        this.selectedProfileImage = null; 
      });
    }, error: (error) => { 
      console.error( 'Registration failed:', error ); 
      let errorMessage = 'Something went wrong while creating your account. Please try again.';
      if (error.status === 400) { errorMessage = error.error || 'This email may already be registered.'; }
      Swal.fire({ 
        icon: 'error', 
        title: 'Registration Failed', 
        text: errorMessage, 
        confirmButtonText: 'Try Again' });
    } });

  }

}
