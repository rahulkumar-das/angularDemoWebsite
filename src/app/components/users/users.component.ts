import { Component, OnInit, ViewChild } from '@angular/core';
import { doesNotReject } from 'assert';
import { UserService } from '../../services/user.service'; //DataService is imported where the users data is kept

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  showExtended: boolean = false;
  loaded: boolean = true;
  enabledAdd: boolean = false;
  showUserForm:boolean=false;
  @ViewChild('userForm') form:any;

  // user of type interface User is used to get the data from userForm
  user:User={
    firstName:'',
    lastName:'',
    email:'',

  };
  users: User[];


  constructor(private dataservice: UserService) {




  }

  ngOnInit(): void {

    this.users=this.dataservice.getUsers();

    

    /* this.addUser({
      firstName: "John",
      lastName: "Doe",
      age: 30,
       address:{
        street:"50 Main st",
        city:"Boston",
        state:"MA"
      } 
    }) */

 

  }

  /*  addUser() {

    this.user.isActive=true,
    this.user.registered= new Date(),
     this.users.unshift(this.user);
     this.user={
      firstName:'',
      lastName:'',
      email:''

     }
   }  */

  
   // this method is called when add user button is clicked. ngForm is initialized with userForm and the object is passed to onSubmit method
   //value is submitted only when the form is valid
   onSubmit(userForm){
     if(!userForm.valid){
       console.log("Form is not valid");
     }
     else{
       userForm.value.isActive=true;
       userForm.value.hide=true;
       userForm.value.registered=new Date();

       this.dataservice.addUser(userForm.value);
       //console.log(userForm.value)
       this.form.reset();
       
     }
    
   } 

   /* onSubmit({value,valid}:{value: User, valid:boolean}){
     if(!valid){
       console.log("Form is not valid");
     }
     else{
       value.isActive=true;
       value.registered = new Date();
       value.hide=true;
       this.users.unshift(value);
       this.form.reset();
       console.log(this.users);
     }

   } */

   
   
}

export interface User {

  firstName: string,
  lastName: string,
  email:string,
  isActive?: boolean,
  registered?:any,
  hide?:boolean
}