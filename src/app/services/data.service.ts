import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  users:Iuser[]=[
    {
      profileImage:"https://avatars.githubusercontent.com/u/62507694",
      fullName:"Seth Adams",
      jobTitle: "Internal Division Producer",
      email:"Dawn11@gmail.com",
      albums:10,
      id:380,
    },
    {
      profileImage:"https://avatars.githubusercontent.com/u/98945988",
      fullName:"Christopher Hamill PhD",
      jobTitle: "Central Interactions Liaison",
      email:"Monica18@gmail.com",
      albums:5,
      id:173,
    },
    {
      profileImage: "https://avatars.githubusercontent.com/u/59745261",
      fullName:"Johanna Goodwin",
      jobTitle:"Central Response Representative",
      email:"Lily86@hotmail.com",
      albums:7,
      id:351,
    },
    {
      profileImage:"https://avatars.githubusercontent.com/u/80570244" ,
      fullName:"Lawrence Reynolds",
      jobTitle:"Central Integration Technician",
      email:"Annamae_Murphy35@yahoo.com",
      albums:7,
      id:642,
    },
    {
      profileImage:"https://avatars.githubusercontent.com/u/70095566",
      fullName:"Katherine Sipes",
      jobTitle:"Principal Applications Technician",
      email:"Zander22@yahoo.com",
      albums:4,
      id:526,
    },
    {
      profileImage:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/517.jpg",
      fullName:"Miss Krista Padberg",
      jobTitle:"Global Assurance Orchestrator",
      email:"Carmen83@hotmail.com",
      albums:8,
      id:218,
    },
    {
      profileImage:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1024.jpg",
      fullName:"Leona Pfeffer",
      jobTitle:"Global Integration Associate",
      email:"Maurine_Hammes@hotmail.com",
      albums:10,
      id:434,
    },
    {
      profileImage:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/542.jpg",
      fullName:"Ira Kub",
      jobTitle: "Dynamic Mobility Planner",
      email:"Ramona.Spencer@yahoo.com",
      albums:6,
      id:568,
    },
    {
      profileImage:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg",
      fullName:"Everett Carter",
      jobTitle:"Direct Intranet Representative",
      email: "Eula.Lubowitz-Crist1@gmail.com",
      albums:3,
      id:416,
    },
    {
      profileImage:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1162.jpg",
      fullName:"Hattie Koss",
      jobTitle:"Chief Markets Facilitator",
      email:  "Emmie24@gmail.com",
      albums:9,
      id:713,
    },
  ]
getData(){
  return  this.users
}
}

