import { Component, } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(public UsersList:DataService){}


deleteUser(){
  let Duser = Number(prompt("შეიყვანე user ის id  რომ წაიშლოს"))
  let index = this.UsersList.users.findIndex(user => user.id = Duser)
  if(index != -1){
    this.UsersList.users.splice(index,1)
}
else{alert("shecdoma")}
}
updateUser(){
  let newUser = Number(prompt("შეიყვანე user ის id  რომ წაიშლოს"))
  let index = this.UsersList.users.findIndex(user => user.id= newUser)
  if(index != -1){
    let updateName = (prompt("შეიყვანე რისი შეცვლა გსურს name ,email")) || "".toLowerCase()
    if(updateName === "name"){
      let newName = prompt("შეიყვანე ახალი name")
      if(newName){
        this.UsersList.users[index].fullName = newName
      }
    }
    else if(updateName === "email"){
      let newEmail = prompt("შეიყვანე ახალი email")
      if(newEmail){
        this.UsersList.users[index].email = newEmail
      }
    }
  }
}
}