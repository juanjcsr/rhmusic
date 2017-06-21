import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';

const appRoutes: Routes = [
  {component: AlbumsComponent, path: ''},
  {path: '*', redirectTo: ''},
];

@NgModule({
  exports: [RouterModule,],
  imports: [RouterModule.forRoot(appRoutes),]
})
export class AppRoutingModule { }