import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component:TenantComponent,
    path:'tenant'
  },
  {
    component:HomeComponent,
    path:''
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:RolesComponent,
    path:'roles'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
