import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './authentication/authentication.guard';

import { LoginComponent } from './pages/login/login.component';
import { DragonsComponent } from './pages/dragons/dragons.component';
import { DragonDetailComponent } from './pages/dragons/dragon-detail/dragon-detail.component';

const routes: Routes = [
  { path: '', component: DragonsComponent, canActivate: [AuthenticationGuard]},
  { path: ':slug/editar', component: DragonDetailComponent, canActivate: [AuthenticationGuard]},
  { path: 'novo', component: DragonDetailComponent, canActivate: [AuthenticationGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
