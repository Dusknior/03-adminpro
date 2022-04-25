import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // path: '/dahsboard', PagesRoutingModule
  // path: '/progress', PagesRoutingModule
  // path: '/graph-one', PagesRoutingModule
  // path: '/login', AuthRoutingModule
  // path: '/register', AuthRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
