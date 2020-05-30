import { Injectable } from '@angular/core';

import { User } from 'src/app/components/users/users.component';
import { Observable} from "rxjs";
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[];

  constructor() { 
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email:'John@gmail.com',
        //image: "http://lorempixel.com/600/600/people/3",
        isActive: true,
        //balance:100,
        registered:new Date('03/11/2017 06:20:00'),
        hide:true
      },
      {
        firstName: "Kevin",
        lastName: "Jhonson",
        email:'kevin@gmail.com',
       // image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        //balance:200,
        registered:new Date('03/05/2019 14:35:00'),
        hide:true
      },
      {
        firstName: "Karen",
        lastName: "William",
        email:'karen@gmail.com',
        //image: "http://lorempixel.com/600/600/people/1",
        isActive: false,
       // balance:1000,
        registered:new Date('12/06/2020 14:35:00'),
        hide:false
      }

    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(value: User){

    this.users.unshift(value);

  }
}
