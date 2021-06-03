import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ReportingComponent } from './reporting/reporting.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path:'product', component: ProductsComponent, canActivate:[AuthGuard]},
  { path:'reporting', component: ReportingComponent, canActivate:[AuthGuard]},
  { path:'user', component: UserComponent, canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
