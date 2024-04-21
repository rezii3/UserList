import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CompanieComponent } from './companie/companie.component';

const routes: Routes = [
  {
    path:"",
    component:UsersComponent
  },
  {
    path:"comp",
    component:CompanieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
