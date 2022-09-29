import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { WelcomepComponent } from './layout/welcomep/welcomep.component';
import { LoginComponent } from './login/login.component';
import { MyappComponent } from './myapp/myapp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '', 
    component: FirstComponent,
    pathMatch:"full"
    //  children: [
    //    {
    //      path: '',
    //     component: WelcomepComponent,
    //      pathMatch:"full"
    // }
    // ]
  },
  {
    path:"sendEmail",
    component:EmailComponent,
   pathMatch:"full"
 },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
   path:"dashboard",
   component:DashboardComponent,
   pathMatch:"full",
   canActivate: [AuthGuard]
 },
 {
  path:"myapp",
  component:  MyappComponent,
 pathMatch:"full"
},
{
  path:"register",
  component:  RegisterComponent,
 pathMatch:"full"
},
{
  path:"navbar",
  component:  NavbarComponent,
 pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
