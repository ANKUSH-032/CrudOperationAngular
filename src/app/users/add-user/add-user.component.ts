import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
 
  adduserForm : FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, 
    private userService: UserService,
    private _snackBar: MatSnackBar){

  }
  ngOnInit(): void {
    this.adduserForm = this.formBuilder.group({
      'username': new FormControl('',[Validators.required, Validators.maxLength(2)]),
      'email': new FormControl('',[Validators.required,  Validators.email]),
      'phone': new FormControl('',[Validators.required, Validators.maxLength(15)])
    })
  }
  createUser(){
this.userService.addUser(this.adduserForm.value).subscribe(data =>{
this._snackBar.open("User Created Successfully");
  }, err => {
    this._snackBar.open("User not Created Successfully")
  })
}
 
}
 