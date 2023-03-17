import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path:'',    component: LoginPageComponent,    pathMatch: 'full'  },
  {
    path:'signin',
    component: SignInComponent,
    pathMatch: 'full'
  },
  {
    path:'loginPage',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path:'forgotPassword',
    component: ForgotPasswordComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
