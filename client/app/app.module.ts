import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {NgxPaginationModule} from 'ngx-pagination';

import { CatsBreedComponent } from './catsbreed/catsBreed.component';
import { CatBreedService } from './services/catBreed.service';
import { SideNavComponent } from './master/sidenav.component';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    CatsBreedComponent,
    SideNavComponent,
    MasterComponent,
    DashboardComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    AngularMultiSelectModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService,
    CatBreedService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
