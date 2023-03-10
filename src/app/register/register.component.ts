import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/loginService/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerationForm !: FormGroup;
  errorMessage : string = "";

  constructor(
    private userService: LoginService,
    private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.registerationForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.pattern('^[A-Za-z ]+$'),Validators.minLength(1)]],
      lastName:['',[Validators.required,Validators.pattern('^[A-Za-z ]+$'),Validators.minLength(1)]],
      emailId:['',[Validators.required,Validators.email,Validators.minLength(3),Validators.maxLength(50)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      location:['',[Validators.required,Validators.pattern('^[A-Za-z ,-]+$'),Validators.minLength(1)]],
      jobTitle:['',[Validators.required,Validators.pattern('^[A-Za-z -,]+$'),Validators.minLength(1)]],
      department:['',[Validators.required,Validators.pattern('^[A-Za-z -,]+$'),Validators.minLength(1)]],
      role:['USER',[Validators.required]],
    });
  }

  registerUser() { 
    this.userService.registerUser(this.registerationForm.value);
    this.router.navigate([''])
  }
}
