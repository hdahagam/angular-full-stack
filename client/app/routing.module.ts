import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { CatsBreedComponent } from './catsbreed/catsBreed.component';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'master', component: MasterComponent, 
  children: [
    { path: 'about', component: AboutComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'cats', component: CatsComponent },  
    { path: 'catbreed', component:CatsBreedComponent},
    { path: 'register', component: RegisterComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
