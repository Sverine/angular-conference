import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5}

  `]
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router, private toastr:ToastrService){}

  profileForm!:FormGroup;
  private firstName!:FormControl;
  private lastName!:FormControl;

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName,
    })
  }
  cancel(){
    this.router.navigate(['events'])
  }
  saveProfile(formValues:{firstName:string, lastName:string}){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
        .subscribe(()=>{
          this.toastr.success('Profile has been changed', '');
        })
      this.router.navigate(['events']);
    }
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/user/login'])
    })
  }

  validateFirstName():boolean{
    return this.firstName.valid || this.firstName.untouched
  }
  validateLastName():boolean{
    return this.lastName.valid || this.lastName.untouched
  }
       
}