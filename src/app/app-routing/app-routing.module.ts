import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyUpdateComponent } from '../company/company-update/company-update.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompanyAddComponent } from '../company/company-add/company-add.component';
import { ComputerUpdateComponent } from '../computer/computer-update/computer-update.component';
import { ComputersComponent } from '../computers/computers.component';
import { ComputerAddComponent } from '../computer/computer-add/computer-add.component';
import { IndexComponent } from '../index/index.component';
import {AppLoginComponent} from '../login/app-login.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {AppLogoutComponent} from '../logout/app-logout.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'company/update/:id',
    component: CompanyUpdateComponent,
    pathMatch: 'full'
  },
  {
    path: 'company/add',
    component: CompanyAddComponent,
    pathMatch: 'full'
  },
  {
    path: 'computer',
    component: ComputersComponent,
    pathMatch: 'full'
  },
  {
    path: 'computer/update/:id',
    component: ComputerUpdateComponent,
    pathMatch: 'full'
  },
  {
    path: 'computer/add',
    component: ComputerAddComponent,
    pathMatch: 'full'
  },

  {
    path: 'login',
    component : AppLoginComponent,
    pathMatch: 'full'
  },
  {
    path : 'logout',
    component : AppLogoutComponent,
    pathMatch : 'full',
    canActivate : [AuthGuard]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
