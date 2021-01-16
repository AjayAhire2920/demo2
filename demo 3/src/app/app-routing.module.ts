import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { NewLoginComponent } from './new-login/new-login.component';



const routes: Routes = [
 
  { path: "", component: NewLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
