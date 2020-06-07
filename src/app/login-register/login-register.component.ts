import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function comparePassword(c: AbstractControl){
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  }
}
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup
  registerForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(4)])
    })

    this.registerForm = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      pwGroup: this.fb.group({
        password: this.fb.control('',[Validators.required, Validators.minLength(6)]),
        confirmPassword: this.fb.control('',[Validators.required, Validators.minLength(6)])
      }, {validators: comparePassword}),
      email: this.fb.control('', [Validators.required, Validators.email])
    })
  }

  onSubmitLogin(){
    console.log(this.loginForm);
  }

  onSubmitRegister(){
    console.log(this.registerForm);
  }
  

}
